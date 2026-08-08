---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---
{% include base_path %}

Education
======
* M.S. in Computer Science and Engineering, University of California San Diego, 2028 (expected)
* B.S. in Neuroscience, Minor in Computer Science, Emory University, 2026

Work experience
======
* Aug 2026 – Oct 2026: Software Engineering Intern
  * Altasciences (Remote)
  * Prototyped an LLM pipeline turning clinical report templates and study source data into populated first drafts, targeting the highest-effort step in the report authoring workflow
  * Wired LLM APIs to OCR ingestion over historical reports; built an evaluation harness measuring draft quality against author-edited ground truth
  * Interviewed report authors to scope the system and presented a build/no-build recommendation to senior leadership

* July 2026 – Dec 2026: Visiting Researcher – Human-Centered AI
  * University of Illinois Urbana-Champaign
  * Designed a randomized 2-week longitudinal field study (N=60) on LLM sycophancy, using a custom browser extension that silently injects opposing system instructions into participants' own LLM sessions
  * Instrumented the extension to log and classify prompt structure over 14 days, testing whether sustained flattery measurably degrades user auditing behavior and downstream reasoning accuracy
  * Authored a comparative review of five recent sycophancy papers, identifying survivorship bias in Reddit-sampled cohorts and the failure of cosine-similarity keyword filters to detect implicit sycophancy
  * Presented and critiqued papers in a weekly seminar reading group

* May 2026 – Present: Research Assistant – Multi-Agent Systems
  * Emory University, advised by Dr. Kai Shu
  * Exploring novel multi-agent topologies aimed at giving LLM systems metacognitive capability, to improve performance on reasoning and cognitive task suites
  * Implementing orchestration, inter-agent communication, and tool-calling interfaces in Python; comparing topology variants against single-agent baselines
  * Extending evaluation to clinical agent benchmarks including MedAgentBench
  * Writing literature reviews on multi-agent architectures and machine metacognition

* Jan 2025 – May 2026: Artificial Intelligence Research Fellow
  * Emory Center for AI Learning
  * Built an NLP pipeline (DistilBERT + Rasch IRT) over 2,000 student assessment and free-text feedback records to evaluate Emory's Chemistry Unbound curriculum, replacing a manual review process taking 50+ hours per cycle
  * Engineered a stacked-ensemble model (XGBoost, MLP, and CNN base learners under an XGBoost meta-learner) over custom spatiotemporal features to predict explosive NFL run plays, reaching 0.71 AUC
  * Engineered a Bayesian state-space model that reliably predicts NFL kicker outcomes based on latent kicker talent values, to help build a proper kicker Elo system

* Sep 2022 – May 2026: Health Economics Research Assistant
  * Emory University
  * Built econometric models in R over national MEPS and AHRF datasets (30,000+ individual records) to quantify disparities in mental health access and provider reimbursement
  * Compiled a nationwide mental health parity law database

Skills
======
* Languages: Python, Java, C, C++, JavaScript/TypeScript, SQL, R, Swift, HTML/CSS
* Frameworks & Libraries
  * PyTorch, TensorFlow, scikit-learn, pandas, NumPy
  * React, React Native, Node.js, Expo, Prisma, JUnit
* Infrastructure & Tools
  * Git, Docker, Kubernetes, AWS, Linux, GitHub Actions
  * PostgreSQL, MongoDB, Supabase, Firebase, Vercel, ChromaDB, LangFuse, MCP

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Service and leadership
======
* Undergraduate Teaching Assistant, DATASCI 497R, Emory Center for AI Learning — mentored 30+ undergraduate researchers through the full arc of their projects
