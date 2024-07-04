import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
import { SectionTitleComponent } from '../section-title/section-title.component'
import { SkillListComponent } from '../skill-list/skill-list.component'
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive'
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, SectionTitleComponent, SkillListComponent, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const codeLines = [
      [
        { value: `const `, class: "keyword" },
        { value: `stripe`, class: "variable" },
        { value: ` = `, class: "operator" },
        { value: `require`, class: "function" },
        { value: `(`, },
        { value: `'stripe'`, class: "string" },
        { value: `)`, },
      ],
      [
        { value: `await`, }
      ],
      // `const <span class="variable">stripe</span> <span class="operator">=</span> <span class="function">require</span>(<span class="string">'stripe'</span>)(<span class="string">'sk_test_BQokikJOvBi2Hl4o7O2GQGHL'</span>);`,
      // `\n`,
      // `\n`,
      // `await <span class="variable">stripe</span>.<span class="function">paymentIntents</span>.<span class="function">create</span>({`,
      // `\n`,
      // `    <span class="variable">amount</span>: <span class="operator">2000</span>,`,
      // `\n`,
      // `    <span class="variable">currency</span>: <span class="string">'usd'</span>`,
      // `\n`,
      // `});`
  ];

    const cursorTween = gsap.to(".cursor", {
      // keyframes: [{ opacity: 0 }, { opacity: 1 }],
      opacity: 0,
      duration: 1,
      ease: "steps(1)", // Makes the cursor appear as a solid line instead of a blinking cursor
      repeat: -1,
      repeatDelay: 0.2,
    });

    cursorTween.play();
  
    gsap.registerPlugin(TextPlugin);
    const timeline = gsap.timeline();

    const typed = document.getElementById("static-code")!;
    const animated = document.getElementById("animated-code")!;

    // Add each part of the code with varying delays to the timeline
    codeLines.forEach((line, index, arr) => {
      line.forEach((part) => {
        timeline
        .to("#animated-code",{
            duration: 1,
            text: {
              value: part.value,
              newClass: part.class,
              // speed: 1,
              // type: "diff",
            },
            // ease: "none",
            onStart: () => {
              cursorTween.pause();
              cursorTween.progress(0);
            },
            onComplete: () => {
              typed.innerHTML += animated.innerHTML;
              animated.innerHTML = "";
              cursorTween.play();
            },
        }, ">"
      )
    });

    if (index !== arr.length - 1) {
      timeline.to("#animated-code", 
        { 
          duration: 1,
          text: { value: "\n", },
          onComplete: () => {
            typed.innerHTML += "<br>";
            animated.innerHTML = "";
          },
        }, ">");
    }
  });

  }
  code = `
  <span class="text-green-700">class</span> CuttingEdge {
    constructor(tech, application) {
      this.tech = tech;
      this.application = application;
    }

    showPotential() {
      console.log(\`Leveraging \${this.tech} for \${this.application} ensures success.\`);
    }

    describeBenefits() {
      console.log(\`\${this.tech} provides numerous benefits for \${this.application}:\`);
      console.log('- Increased efficiency');
      console.log('- Scalability');
      console.log('- Cost-effectiveness');
      console.log('- Enhanced user experience');
    }

    demonstrateExample() {
      console.log(\`Example: Using \${this.tech} in \${this.application}\`);
      if (this.tech === 'AI') {
          console.log('Implementing AI-driven chatbots for automated customer support.');
      } else if (this.tech === 'Blockchain') {
          console.log('Using Blockchain for secure and transparent transactions.');
      } else {
          console.log(\`Integrating \${this.tech} for innovative solutions in \${this.application}.\`);
      }
    }
  }

  const techIntegration = new CuttingEdge(
    'AI',
    'business automation'
  );

  techIntegration.showPotential();
  techIntegration.describeBenefits();
  techIntegration.demonstrateExample();
  `;


  stripe = `
<span class="keyword">const</span> <span class="variable">stripe</span> <span class="operator">=</span> <span class="function">require</span>(<span class="string">'stripe'</span>)(<span class="string">'sk_test_BQokikJOvBi2Hl4o7O2GQGHL'</span>);

<span class="keyword">await</span> <span class="variable">stripe</span>.<span class="function">paymentIntents</span>.<span class="function">create</span>({
    <span class="variable">amount</span>: <span class="operator">2000</span>,
    <span class="variable">currency</span>: <span class="string">'usd'</span>
});
  `; 
}
