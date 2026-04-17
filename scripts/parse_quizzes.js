const fs = require('fs');
const path = require('path');

const quizFiles = [
  { file: 'ccna-1-0-network-fundamentals-multiple-choice-questionnaire.md', id: '1.0', domain: 'Network Fundamentals' },
  { file: 'ccna-2-0-network-access-multiple-choice-questionnaire-aligned-with-200-301-v1-1-syllabus.md', id: '2.0', domain: 'Network Access' },
  { file: 'ccna-3-0-ip-connectivity-multiple-choice-questionnaire-aligned-with-200-301-v1-1-syllabus.md', id: '3.0', domain: 'IP Connectivity' },
  { file: 'ccna-4-0-ip-services-multiple-choice-questionnaire-aligned-with-200-301-v1-1-syllabus.md', id: '4.0', domain: 'IP Services' },
  { file: 'ccna-5-0-security-fundamentals-multiple-choice-questionnaire-aligned-with-200-301-v1-1-syllabus.md', id: '5.0', domain: 'Security Fundamentals' },
  { file: 'ccna-6-0-automation-and-programmability-multiple-choice-questionnaire-aligned-with-200-301-v1-1-syllabus.md', id: '6.0', domain: 'Automation and Programmability' }
];

const answerKeyFile = 'ccna-200-301-v1-1-complete-answer-key-for-all-sections.md';
const quizzesDir = path.join(__dirname, '../Quizzes and memo');

function parseAnswerKey() {
  const content = fs.readFileSync(path.join(quizzesDir, answerKeyFile), 'utf8');
  const lines = content.split('\n');
  const answers = {};
  
  let currentDomain = '';
  lines.forEach(line => {
    const domainMatch = line.match(/## \*\*📌 (\d\.\d) (.*)\*\*/);
    if (domainMatch) {
      currentDomain = domainMatch[1];
      answers[currentDomain] = {};
    }
    
    const answerMatch = line.match(/^(\d+)\. \*\*([ABCD])\*\*/);
    if (answerMatch && currentDomain) {
      answers[currentDomain][answerMatch[1]] = answerMatch[2];
    }
  });
  return answers;
}

function parseQuiz(quizConfig, allAnswers) {
  const content = fs.readFileSync(path.join(quizzesDir, quizConfig.file), 'utf8');
  const lines = content.split('\n');
  const questions = [];
  
  let currentQuestion = null;
  const domainAnswers = allAnswers[quizConfig.id] || {};

  lines.forEach(line => {
    const qMatch = line.match(/^(\d+)\. (.*)/);
    if (qMatch) {
      if (currentQuestion) questions.push(currentQuestion);
      const id = parseInt(qMatch[1]);
      currentQuestion = {
        id,
        question: qMatch[2].trim(),
        options: {},
        correctAnswer: domainAnswers[id] || 'A' // Fallback to A if not found
      };
    } else if (currentQuestion) {
      const optionMatch = line.match(/ - ([ABCD])\) (.*)/);
      if (optionMatch) {
        currentQuestion.options[optionMatch[1]] = optionMatch[2].trim();
      }
    }
  });
  if (currentQuestion) questions.push(currentQuestion);
  
  return {
    id: quizConfig.id,
    title: quizConfig.domain,
    domain: quizConfig.domain,
    questions
  };
}

const allAnswers = parseAnswerKey();
const allQuizzes = quizFiles.map(q => parseQuiz(q, allAnswers));

const output = `import { Quiz } from '../types';

export const ALL_QUIZZES: Quiz[] = ${JSON.stringify(allQuizzes, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/quizzes.ts'), output);
console.log('Successfully generated src/data/quizzes.ts');
