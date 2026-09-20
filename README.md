# ICSE Home Schooling Portal (Astro + Starlight)

[![Deploy to GitHub Pages](https://github.com/karthik-r-bdump/school-astro-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/karthik-r-bdump/school-astro-web/actions/workflows/deploy.yml)

A modern, high-performance open-source educational portal and curriculum repository for homeschooling families following the **ICSE (Council for the Indian School Certificate Examinations - CISCE)** syllabus.

Live Portal: **[https://karthik-r-bdump.github.io/school-astro-web/](https://karthik-r-bdump.github.io/school-astro-web/)**

---

## 🎯 Focus Grades & Architecture

This portal is structured specifically around **Standard 7 (Std 7)** and **Standard 3 (Std 3)**:

- **Standard 7 (Class 7)**:
  - Biology (Tissues, Photosynthesis, Respiration, Excretion)
  - Chemistry (Matter, Changes, Elements/Compounds/Mixtures, Atomic Structure, Language of Chemistry)
  - Physics (Measurement, Motion, Energy, Light)
  - History & Civics (Delhi Sultanate, Vijayanagar & Bahmani, Constitution of India)
  - Geography (Topographical Maps, Weathering & Soil, Europe & Switzerland)
  - Mathematics (Integers, Fractions, Rational Numbers, Exponents, Sets, Algebra, Geometry)
  - English Language & Literature
  - Computer Studies (Hardware, Operating Systems)
  - Second Languages (Kannada, Hindi)
  - *Full 80-mark Midterm Specimen Papers for all subjects*

- **Standard 3 (Class 3)**:
  - Mathematics (Numbers & Place Value, 4-digit operations, Rounding Numbers, Revision Worksheets)
  - General Science (Living Things, Birds & Beaks, Safety & First Aid, Human Body)
  - Social Studies (Earth & Solar System, Maps & Directions, Community Helpers)
  - English Language (Spelling & Vocabulary, Parts of Speech, Sentence Structure)
  - Computer Studies (IPO Cycle, Hardware & Software)
  - Hindi & Kannada

---

## 📝 Strictly Separated Questions & Answers

To enable realistic self-assessment without spoilers:
- **`questions.md`**: **Questions only** (formatted as clean, print-ready test sheets).
- **`answers.md`**: **Comprehensive answer keys** containing the original questions, complete solutions, and step-by-step ICSE marking schemes.

---

## 🛡️ School-Agnostic & Anonymization Policy

This portal is completely **school-agnostic**:
- Never contains names of specific educational institutions.
- No scanned textbook images or proprietary watermarks.
- All past papers are standardized into ICSE specimen examinations.
- Enforced via automated redaction linter (`npm run lint:redaction`).

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run school-agnostic redaction check
npm run lint:redaction

# Start local preview server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```