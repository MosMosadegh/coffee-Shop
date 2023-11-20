import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ links }) {
  return (
    <>
      <section className="mb-8">
        <div className="container">
          <div className="flex items-center text-zinc-700 dark:text-white bg-gray-200 py-3 border rounded-2xl">
            <div className="px-5">
              <i>
                <svg className="w-6 h-6 text-zinc-700 dark:text-white ">
                  <use href="#home"></use>
                </svg>
              </i>
            </div>
            <ul className="flex items-center">
              {links.map((link) => (
                <li key={link.id} className="list-none">
                  <Link to={`/${link.to}`} className="flex hover:text-blue-500 transition-colors">
                    {link.title}
                    {link.id !== links.length ? (
                      <i className="mx-2">
                        <svg className="w-5 h-5">
                          <use href="#chevron-left"></use>
                        </svg>
                      </i>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
