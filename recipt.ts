// @ts-ignore React is provided by the consuming Next.js application.
import { createElement, type ReactNode } from 'react';
// @ts-ignore Next.js is provided by the consuming application.
import type { Metadata } from 'next';
// @ts-ignore Next.js font modules are provided by the consuming application.
import { Inter } from 'next/font/google';
// @ts-ignore The stylesheet is provided by the consuming application.
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export type Recipe = {
  id: string;
  title: string;
  minutes: number;
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: '1', title: 'Paneer Butter Masala', minutes: 40, cuisine: 'North Indian' },
  { id: '2', title: 'Masala Dosa', minutes: 60, cuisine: 'South Indian' },
  { id: '3', title: 'Spaghetti Aglio e Olio', minutes: 20, cuisine: 'Italian' },
  { id: '4', title: 'Vegetable Hakka Noodles', minutes: 30, cuisine: 'Indo-Chinese' }
];


export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return createElement(
    'div',
    { className: 'border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition' },
    createElement('h2', { className: 'text-xl font-bold mb-2' }, recipe.title),
    createElement('p', { className: 'text-gray-600' }, `⏱ ${recipe.minutes} mins`),
    createElement('p', { className: 'text-gray-600' }, `🌍 ${recipe.cuisine}`)
  );
}

export const metadata: Metadata = {
  title: 'NextBites',
  description: 'Recipe directory',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return createElement(
    'html',
    { lang: 'en' },
    createElement(
      'body',
      { className: inter.className },
      createElement(
        'nav',
        { className: 'bg-gray-900 text-white p-4 mb-6' },
        createElement(
          'div',
          { className: 'max-w-6xl mx-auto font-bold text-2xl' },
          'NextBites'
        )
      ),
      createElement('main', { className: 'max-w-6xl mx-auto px-4 pb-10' }, children)
    )
  );
}
export function Home() {
  return createElement(
    'div',
    null,
    createElement('h1', { className: 'text-3xl font-bold mb-6' }, 'Latest Recipes'),
    createElement(
      'div',
      { className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' },
      ...recipes.map((recipe) => createElement(RecipeCard, { key: recipe.id, recipe }))
    )
  );
}