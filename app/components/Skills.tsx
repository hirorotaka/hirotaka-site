import { skills } from '@/constants/skills';
import Image from 'next/image';
import React from 'react';
import { AiFillBulb } from 'react-icons/ai';

function Skills() {
  return (
    <section className="w-full px-6 py-10 bg-whitesmoke" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-medium text-gray-700 mb-8 flex items-center gap-2">
          <AiFillBulb className="text-cadetblue" />
          スキル & 技術スタック
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={skill.image}
                  width={40}
                  height={40}
                  alt={skill.name}
                  className="object-contain"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-xs text-gray-500">{skill.years}</span>
                  </div>
                  {skill.framework && (
                    <p className="text-xs text-gray-600 mt-0.5">
                      {skill.framework}
                    </p>
                  )}
                </div>
              </div>

              {skill.relatedServices && (
                <p className="text-xs text-gray-600 mt-1">
                  {skill.relatedServices}
                </p>
              )}

              <p className="text-xs text-gray-500 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
