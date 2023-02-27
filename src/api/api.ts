import fs from 'fs';
import html from 'remark-html';
import {join} from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import type {QuizModel} from './QuizModel';
import type {GuideModel} from './GuideModel';
import type {WorldModel} from './WorldModel';
import type {ExerciseModel} from './ExerciseModel';

export const getWorld = (): WorldModel => {
    const worldPath = join(process.cwd(), '_data', 'world.json');
    const fileContents = fs.readFileSync(worldPath, 'utf8');
    return JSON.parse(fileContents);
};

const guidesDirectory = join(process.cwd(), '_data', 'guides');

export const listGuides = (): GuideModel[] => {
    const files = fs.readdirSync(guidesDirectory);
    return files.map(file => {
        const fileContents = fs.readFileSync(join(guidesDirectory, file), 'utf8');
        const {data, content} = matter(fileContents);
        return {title: data.title, slug: file.replace('.md', '')};
    });
};

// const schema = merge(github, {attributes: {'*': ['className']}});

export const getGuide = async (slug: string): Promise<GuideModel> => {
    const fileContents = fs.readFileSync(join(guidesDirectory, `${slug}.md`), 'utf8');
    const {data, content} = matter(fileContents);
    const result = await remark().use(html).process(content);
    return {title: data.title, slug, content: result.toString()};
};

const quizDirectory = join(process.cwd(), '_data', 'quiz');

export const listQuiz = (): QuizModel[] => {
    const files = fs.readdirSync(quizDirectory);
    return files.map(file => {
        const fileContents = fs.readFileSync(join(quizDirectory, file), 'utf8');
        return {title: JSON.parse(fileContents).title, slug: file.replace('.json', '')};
    });
};

export const getQuiz = async (slug: string): Promise<QuizModel> => {
    const fileContents = fs.readFileSync(join(quizDirectory, `${slug}.json`), 'utf8');
    const data = JSON.parse(fileContents);
    return {...data, slug: slug};
};

const exercisesDirectory = join(process.cwd(), '_data', 'exercises');

export const listExercises = (): ExerciseModel[] => {
    const files = fs.readdirSync(exercisesDirectory);
    return files.map(file => {
        return {title: file, slug: file};
    });
};

export const getExercise = async (slug: string): Promise<ExerciseModel> => {
    const fileContents = fs.readFileSync(join(exercisesDirectory, `${slug}`, 'instructions.md'), 'utf8');
    const {data, content} = matter(fileContents);
    const result = await remark().use(html).process(content);
    const jsContents = fs.readFileSync(join(exercisesDirectory, `${slug}`, 'default.js'), 'utf8');
    let testContents = '';
    try {
        testContents = fs.readFileSync(join(exercisesDirectory, `${slug}`, 'test.js'), 'utf8');
    } catch (e) {}

    return {title: data.title, slug, defaultJS: jsContents, testJS: testContents, instructions: result.toString()};
};
