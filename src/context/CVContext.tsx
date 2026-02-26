import { useState, type ReactNode } from 'react';
import { createContext } from 'react';
import { cvData } from '../cvData';

/**
 * @typedef {Object} Experience
 * @property {string} company
 * @property {string} role
 * @property {string} period
 * @property {string} description
 */

/**
 * @typedef {Object} Education
 * @property {string} school
 * @property {string} degree
 * @property {string} year
 */

/**
 * @typedef {Object} Greeting
 * @property {string} name
 * @property {string} title
 * @property {string} greeting
 * @property {string} imageUrl
 * @property {string} summary
 * @property {string} highlights
 * @property {string} email
 * @property {string} phone
 * @property {string} address
 * @property {string[]} skills
 * @property {Experience[]} experience
 * @property {Education[]} education
 */

/** @type {Greeting} */
const defaultGreeting = cvData;

export const GreetingContext = createContext(defaultGreeting);

export const GreetingProvider = ({ children }: { children: ReactNode }) => {
  const [greetingData] = useState(defaultGreeting);

  return (
    <GreetingContext.Provider value={greetingData}>
      {children}
    </GreetingContext.Provider>
  );
};