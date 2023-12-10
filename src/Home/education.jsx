import React from 'react';

const Education = () => {
  return (
    <div className="education-container mt-48 text-center">
      <h2 className="text-4xl text-cyan-400 font-bold mb-4">Education</h2>

      <div className="table-container overflow-x-auto max-w-3xl mx-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-cyan-400 text-white">
              <th className="py-2 px-4">Degree</th>
              <th className="py-2 px-4">Institution</th>
              <th className="py-2 px-4">Year</th>
              <th className="py-2 px-4">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">B.Sc. in Computer Science</td>
              <td className="py-2 px-4">Daffodil International University</td>
              <td className="py-2 px-4">2019 - Last semester</td>
              <td className="py-2 px-4">Pending</td>
            </tr>
            <tr>
              <td className="py-2 px-4">H.S.C (Higher Secondary Certificate)</td>
              <td className="py-2 px-4">Chittagong Cantonment Public College</td>
              <td className="py-2 px-4">2015 - 2017</td>
              <td className="py-2 px-4">4.75</td>
            </tr>
            <tr>
              <td className="py-2 px-4">S.S.C (Secondary School Certificate)</td>
              <td className="py-2 px-4">Chittagong Cantonment Public College</td>
              <td className="py-2 px-4">2015</td>
              <td className="py-2 px-4">5.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
