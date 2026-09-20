import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://karthik-r-bdump.github.io',
  base: '/school-astro-web/',
  integrations: [
    starlight({
      title: 'ICSE Home Schooling Portal',
      description: 'Comprehensive ICSE curriculum, chapter notes, question banks, and solutions for Std 7 and Std 3.',
      social: {
        github: 'https://github.com/karthik-r-bdump/school-astro-web',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Portal Overview', link: '/' },
            { label: 'Study & Exam Strategy', link: '/guides/exam-strategy/' },
          ],
        },
        {
          label: 'Standard 7 (Class 7)',
          badge: { text: 'Std 7', variant: 'note' },
          items: [
            { label: 'Std 7 Overview', link: '/std-7/' },
            {
              label: 'Biology',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-7/biology/' },
                {
                  label: 'Ch 1: Plant & Animal Tissues',
                  items: [
                    { label: 'Study Notes', link: '/std-7/biology/01-plant-and-animal-tissues/notes/' },
                    { label: 'Questions Only', link: '/std-7/biology/01-plant-and-animal-tissues/questions/' },
                    { label: 'Answers & Marking Scheme', link: '/std-7/biology/01-plant-and-animal-tissues/answers/' },
                  ],
                },
                {
                  label: 'Ch 2: Photosynthesis',
                  items: [
                    { label: 'Study Notes', link: '/std-7/biology/02-photosynthesis/notes/' },
                    { label: 'Questions Only', link: '/std-7/biology/02-photosynthesis/questions/' },
                    { label: 'Answers & Marking Scheme', link: '/std-7/biology/02-photosynthesis/answers/' },
                  ],
                },
                {
                  label: 'Ch 3: Respiration',
                  items: [
                    { label: 'Study Notes', link: '/std-7/biology/03-respiration/notes/' },
                    { label: 'Questions Only', link: '/std-7/biology/03-respiration/questions/' },
                    { label: 'Answers & Marking Scheme', link: '/std-7/biology/03-respiration/answers/' },
                  ],
                },
                {
                  label: 'Ch 4: Excretory System',
                  items: [
                    { label: 'Study Notes', link: '/std-7/biology/04-excretory-system/notes/' },
                    { label: 'Questions Only', link: '/std-7/biology/04-excretory-system/questions/' },
                    { label: 'Answers & Marking Scheme', link: '/std-7/biology/04-excretory-system/answers/' },
                  ],
                },
                {
                  label: 'Test & Question Banks',
                  items: [
                    { label: 'Midterm Specimen Questions', link: '/std-7/biology/question-banks/midterm-specimen-questions/' },
                    { label: 'Midterm Model Answers', link: '/std-7/biology/question-banks/midterm-specimen-answers/' },
                  ],
                },
              ],
            },
            {
              label: 'Chemistry',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-7/chemistry/' },
                {
                  label: 'Ch 1: Matter & Its Composition',
                  items: [
                    { label: 'Study Notes', link: '/std-7/chemistry/01-matter-and-composition/notes/' },
                    { label: 'Questions Only', link: '/std-7/chemistry/01-matter-and-composition/questions/' },
                    { label: 'Answers & Marking Scheme', link: '/std-7/chemistry/01-matter-and-composition/answers/' },
                  ],
                },
                {
                  label: 'Ch 5: Language of Chemistry',
                  items: [
                    { label: 'Study Notes', link: '/std-7/chemistry/05-language-of-chemistry/notes/' },
                    { label: 'Questions Only', link: '/std-7/chemistry/05-language-of-chemistry/questions/' },
                    { label: 'Answers & Marking Scheme', link: '/std-7/chemistry/05-language-of-chemistry/answers/' },
                  ],
                },
                {
                  label: 'Test & Question Banks',
                  items: [
                    { label: 'Midterm Specimen Questions', link: '/std-7/chemistry/question-banks/midterm-specimen-questions/' },
                    { label: 'Midterm Model Answers', link: '/std-7/chemistry/question-banks/midterm-specimen-answers/' },
                  ],
                },
              ],
            },
            {
              label: 'Physics',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-7/physics/' },
                {
                  label: 'Ch 1: Measurement & Density',
                  items: [
                    { label: 'Study Notes', link: '/std-7/physics/01-physical-quantities-measurement/notes/' },
                    { label: 'Questions Only', link: '/std-7/physics/01-physical-quantities-measurement/questions/' },
                    { label: 'Answers & Marking Scheme', link: '/std-7/physics/01-physical-quantities-measurement/answers/' },
                  ],
                },
                {
                  label: 'Test & Question Banks',
                  items: [
                    { label: 'Midterm Specimen Questions', link: '/std-7/physics/question-banks/midterm-specimen-questions/' },
                    { label: 'Midterm Model Answers', link: '/std-7/physics/question-banks/midterm-specimen-answers/' },
                  ],
                },
              ],
            },
            {
              label: 'History & Civics',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-7/history-civics/' },
                {
                  label: 'Ch 1: The Delhi Sultanate',
                  items: [
                    { label: 'Study Notes', link: '/std-7/history-civics/01-delhi-sultanate/notes/' },
                    { label: 'Questions Only', link: '/std-7/history-civics/01-delhi-sultanate/questions/' },
                    { label: 'Answers & Marking Scheme', link: '/std-7/history-civics/01-delhi-sultanate/answers/' },
                  ],
                },
                {
                  label: 'Ch 3: Constitution of India',
                  items: [
                    { label: 'Study Notes', link: '/std-7/history-civics/03-constitution-of-india/notes/' },
                    { label: 'Questions Only', link: '/std-7/history-civics/03-constitution-of-india/questions/' },
                    { label: 'Answers & Marking Scheme', link: '/std-7/history-civics/03-constitution-of-india/answers/' },
                  ],
                },
                {
                  label: 'Test & Question Banks',
                  items: [
                    { label: 'Midterm Specimen Questions', link: '/std-7/history-civics/question-banks/midterm-specimen-questions/' },
                    { label: 'Midterm Model Answers', link: '/std-7/history-civics/question-banks/midterm-specimen-answers/' },
                  ],
                },
              ],
            },
            {
              label: 'Geography',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-7/geography/' },
                {
                  label: 'Ch 1: Topographical Maps',
                  items: [
                    { label: 'Study Notes', link: '/std-7/geography/01-topographical-maps/notes/' },
                    { label: 'Questions Only', link: '/std-7/geography/01-topographical-maps/questions/' },
                    { label: 'Answers & Marking Scheme', link: '/std-7/geography/01-topographical-maps/answers/' },
                  ],
                },
                {
                  label: 'Test & Question Banks',
                  items: [
                    { label: 'Midterm Specimen Questions', link: '/std-7/geography/question-banks/midterm-specimen-questions/' },
                    { label: 'Midterm Model Answers', link: '/std-7/geography/question-banks/midterm-specimen-answers/' },
                  ],
                },
              ],
            },
            {
              label: 'Mathematics',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-7/mathematics/' },
                {
                  label: 'Ch 1: Integers',
                  items: [
                    { label: 'Study Notes', link: '/std-7/mathematics/01-integers/notes/' },
                    { label: 'Questions Only', link: '/std-7/mathematics/01-integers/questions/' },
                    { label: 'Answers & Solutions', link: '/std-7/mathematics/01-integers/answers/' },
                  ],
                },
                {
                  label: 'Test & Question Banks',
                  items: [
                    { label: 'Midterm Specimen Questions', link: '/std-7/mathematics/question-banks/midterm-specimen-questions/' },
                    { label: 'Midterm Model Answers', link: '/std-7/mathematics/question-banks/midterm-specimen-answers/' },
                  ],
                },
              ],
            },
            {
              label: 'English',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-7/english/' },
                {
                  label: 'Ch 1: Grammar Nouns & Pronouns',
                  items: [
                    { label: 'Study Notes', link: '/std-7/english/01-grammar-nouns-pronouns/notes/' },
                    { label: 'Questions Only', link: '/std-7/english/01-grammar-nouns-pronouns/questions/' },
                    { label: 'Answers & Solutions', link: '/std-7/english/01-grammar-nouns-pronouns/answers/' },
                  ],
                },
                {
                  label: 'Test & Question Banks',
                  items: [
                    { label: 'Language Midterm Questions', link: '/std-7/english/question-banks/english-language-midterm-questions/' },
                    { label: 'Language Midterm Answers', link: '/std-7/english/question-banks/english-language-midterm-answers/' },
                  ],
                },
              ],
            },
            {
              label: 'Computer Studies',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-7/computer-studies/' },
                {
                  label: 'Ch 1: Hardware Components',
                  items: [
                    { label: 'Study Notes', link: '/std-7/computer-studies/01-hardware-components/notes/' },
                    { label: 'Questions Only', link: '/std-7/computer-studies/01-hardware-components/questions/' },
                    { label: 'Answers & Solutions', link: '/std-7/computer-studies/01-hardware-components/answers/' },
                  ],
                },
                {
                  label: 'Test & Question Banks',
                  items: [
                    { label: 'Midterm Specimen Questions', link: '/std-7/computer-studies/question-banks/midterm-specimen-questions/' },
                    { label: 'Midterm Model Answers', link: '/std-7/computer-studies/question-banks/midterm-specimen-answers/' },
                  ],
                },
              ],
            },
            {
              label: 'Second Languages',
              collapsed: true,
              items: [
                {
                  label: 'Kannada',
                  items: [
                    { label: 'Syllabus & Overview', link: '/std-7/kannada/' },
                    { label: 'Midterm Specimen Questions', link: '/std-7/kannada/question-banks/midterm-specimen-questions/' },
                    { label: 'Midterm Model Answers', link: '/std-7/kannada/question-banks/midterm-specimen-answers/' },
                  ],
                },
                {
                  label: 'Hindi',
                  items: [
                    { label: 'Syllabus & Overview', link: '/std-7/hindi/' },
                    { label: 'Midterm Specimen Questions', link: '/std-7/hindi/question-banks/midterm-specimen-questions/' },
                    { label: 'Midterm Model Answers', link: '/std-7/hindi/question-banks/midterm-specimen-answers/' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Standard 3 (Class 3)',
          badge: { text: 'Std 3', variant: 'success' },
          items: [
            { label: 'Std 3 Overview', link: '/std-3/' },
            {
              label: 'Mathematics',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-3/mathematics/' },
                {
                  label: 'Ch 1: Numbers & Place Value',
                  items: [
                    { label: 'Study Notes', link: '/std-3/mathematics/01-numbers-and-place-value/notes/' },
                    { label: 'Questions Only', link: '/std-3/mathematics/01-numbers-and-place-value/questions/' },
                    { label: 'Answers & Solutions', link: '/std-3/mathematics/01-numbers-and-place-value/answers/' },
                  ],
                },
                {
                  label: 'Ch 4: Rounding Numbers',
                  items: [
                    { label: 'Study Notes', link: '/std-3/mathematics/04-rounding-numbers/notes/' },
                    { label: 'Questions Only', link: '/std-3/mathematics/04-rounding-numbers/questions/' },
                    { label: 'Answers & Solutions', link: '/std-3/mathematics/04-rounding-numbers/answers/' },
                  ],
                },
                {
                  label: 'Revision Worksheets',
                  items: [
                    { label: 'Revision Worksheets (Questions)', link: '/std-3/mathematics/question-banks/revision-worksheet-questions/' },
                    { label: 'Revision Worksheets (Answers)', link: '/std-3/mathematics/question-banks/revision-worksheet-answers/' },
                  ],
                },
              ],
            },
            {
              label: 'General Science',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-3/general-science/' },
                {
                  label: 'Ch 2: Birds – Feathers & Beaks',
                  items: [
                    { label: 'Study Notes', link: '/std-3/general-science/02-birds-feathers-and-beaks/notes/' },
                    { label: 'Questions Only', link: '/std-3/general-science/02-birds-feathers-and-beaks/questions/' },
                    { label: 'Answers & Solutions', link: '/std-3/general-science/02-birds-feathers-and-beaks/answers/' },
                  ],
                },
                {
                  label: 'Ch 3: Safety & First Aid',
                  items: [
                    { label: 'Study Notes', link: '/std-3/general-science/03-safety-and-first-aid/notes/' },
                    { label: 'Questions Only', link: '/std-3/general-science/03-safety-and-first-aid/questions/' },
                    { label: 'Answers & Solutions', link: '/std-3/general-science/03-safety-and-first-aid/answers/' },
                  ],
                },
              ],
            },
            {
              label: 'English',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-3/english/' },
                {
                  label: 'Ch 1: Spelling & Vocabulary',
                  items: [
                    { label: 'Study Notes', link: '/std-3/english/01-spelling-and-vocabulary/notes/' },
                    { label: 'Questions Only', link: '/std-3/english/01-spelling-and-vocabulary/questions/' },
                    { label: 'Answers & Solutions', link: '/std-3/english/01-spelling-and-vocabulary/answers/' },
                  ],
                },
              ],
            },
            {
              label: 'Hindi',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-3/hindi/' },
                {
                  label: 'Ch 1: सर्वनाम (Pronouns)',
                  items: [
                    { label: 'Study Notes', link: '/std-3/hindi/01-sarvanam/notes/' },
                    { label: 'Questions Only', link: '/std-3/hindi/01-sarvanam/questions/' },
                    { label: 'Answers & Solutions', link: '/std-3/hindi/01-sarvanam/answers/' },
                  ],
                },
              ],
            },
            {
              label: 'Kannada',
              collapsed: true,
              items: [
                { label: 'Syllabus & Index', link: '/std-3/kannada/' },
                {
                  label: 'Ch 1: ಗುಬ್ಬಚ್ಚಿ ಮತ್ತು ಮರಿಗಳು',
                  items: [
                    { label: 'Study Notes', link: '/std-3/kannada/01-gubbacchi-mattu-marigalu/notes/' },
                    { label: 'Questions Only', link: '/std-3/kannada/01-gubbacchi-mattu-marigalu/questions/' },
                    { label: 'Answers & Solutions', link: '/std-3/kannada/01-gubbacchi-mattu-marigalu/answers/' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
