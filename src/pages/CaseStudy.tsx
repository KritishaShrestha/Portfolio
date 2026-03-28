import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CaseStudy: React.FC = () => {
  const { id } = useParams();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Content can be conditionally rendered based on 'id', but for now we provide the template.
  const isOrangeHRM = id === "OrangeHRM-CaseStudy";

  return (
    <main className="min-h-screen pt-12 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full mt-10">
        
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium text-sm"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to Projects
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-4">
            OrangeHRM <span className="text-primary">-</span> MyInfo Module Testing
          </h1>
          <div className="flex gap-3">
             <span className="inline-flex rounded-full bg-slate-200 dark:bg-slate-800 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700 dark:text-slate-300">
               Quality Assurance
             </span>
             <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
               Manual Testing
             </span>
          </div>
        </header>

        {/* Project Overview + Main Image */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Project Overview</h2>
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
              <p>
                Performed manual testing on the My Info module of OrangeHRM to validate core functionalities, data handling, and input validations.
              </p>
              <p>
                The project involved designing test scenarios, writing detailed test cases, executing them, identifying defects, and maintaining traceability using RTM.
              </p>
            </div>
          </div>
          <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl aspect-video relative flex items-center justify-center border border-slate-300 dark:border-slate-700">
            {/* Placeholder for Photo */}
            <img
              alt="Kritisha"
              src="/orange.png"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Scope of Testing */}
          <div className="bg-white dark:bg-slate-800/80 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
               <span className="material-symbols-outlined text-primary">fact_check</span>
               Scope of Testing
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm list-disc list-outside pl-5">
              <li>Login Validation</li>
              <li>Personal Details Update and Management</li>
              <li>Contact Details validations</li>
              <li>Emergency Contacts addition/deletion</li>
              <li>Dependents management</li>
              <li>Immigration records processing</li>
            </ul>
          </div>

          {/* Testing Approach */}
          <div className="bg-white dark:bg-slate-800/80 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent">rule</span>
              Testing Approach
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm list-disc list-outside pl-5">
              <li>Created structured test scenarios based on requirements</li>
              <li>Designed detailed test cases with expected outcomes</li>
              <li>Executed test cases manually and recorded results</li>
              <li>Identified defects and documented them in a bug report</li>
              <li>Maintained traceability using Requirement Traceability Matrix (RTM)</li>
            </ul>
          </div>
        </div>

        {/* Test Scenarios Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            Test Scenarios Sample
          </h2>
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold w-24">SNO</th>
                  <th className="p-4 font-semibold w-32 whitespace-nowrap">Req. ID</th>
                  <th className="p-4 font-semibold min-w-[200px]">Scenario</th>
                  <th className="p-4 font-semibold w-48 text-center whitespace-nowrap">Test Cases</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600 dark:text-slate-400 divide-y divide-slate-100 dark:divide-slate-700/50">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium">8</td>
                  <td className="p-4">3.1.4</td>
                  <td className="p-4">ESS user can add Emergency Contact</td>
                  <td className="p-4 text-center"><span className="inline-flex bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-xs font-bold">1</span></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium">24</td>
                  <td className="p-4">3.1.9</td>
                  <td className="p-4">ESS user can view list of supervisor they report to</td>
                  <td className="p-4 text-center"><span className="inline-flex bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-xs font-bold">2</span></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium">38</td>
                  <td className="p-4">3.1.10</td>
                  <td className="p-4">ESS user can add multiple License</td>
                  <td className="p-4 text-center"><span className="inline-flex bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-xs font-bold">1</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Test Cases Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Test Cases Sample</h2>
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold min-w-[140px]">Test ID</th>
                  <th className="p-4 font-semibold min-w-[160px]">Module</th>
                  <th className="p-4 font-semibold min-w-[100px]">Req ID</th>
                  <th className="p-4 font-semibold min-w-[200px]">Scenario</th>
                  <th className="p-4 font-semibold min-w-[250px]">Title</th>
                  <th className="p-4 font-semibold min-w-[300px]">Steps</th>
                  <th className="p-4 font-semibold min-w-[150px]">Test Data</th>
                  <th className="p-4 font-semibold min-w-[250px]">Expected Result</th>
                  <th className="p-4 font-semibold min-w-[250px]">Actual Result</th>
                  <th className="p-4 font-semibold min-w-[120px]">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600 dark:text-slate-400 divide-y divide-slate-100 dark:divide-slate-700/50">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium whitespace-nowrap">TC_MyInfo_005</td>
                  <td className="p-4 whitespace-nowrap">Orange HRM-MyInfo</td>
                  <td className="p-4">3.1.1</td>
                  <td className="p-4">ESS user can view Personal Details</td>
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-200">Verify ESS user is able to view Personal Details</td>
                  <td className="p-4 whitespace-pre-wrap">1. Login to OrangeHRM as ESS User.{"\n"}2. Click on MyInfo tab.{"\n"}3. Click on Personal Detail button.</td>
                  <td className="p-4 text-slate-500">N/A</td>
                  <td className="p-4">ESS user should be able to view Personal Details</td>
                  <td className="p-4">As expected</td>
                  <td className="p-4"><span className="text-emerald-600 font-bold bg-emerald-100 px-2 py-1 rounded dark:bg-emerald-900/30">Passed</span></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium whitespace-nowrap">TC_MyInfo_014</td>
                  <td className="p-4 whitespace-nowrap">Orange HRM-MyInfo</td>
                  <td className="p-4">3.1.4</td>
                  <td className="p-4">ESS user can add Attachment under Emergency Contact</td>
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-200">Verify ESS user is able to add attachment to support the details.</td>
                  <td className="p-4 whitespace-pre-wrap">1. Login to OrangeHRM as ESS User.{"\n"}2. Click on MyInfo tab.{"\n"}3. Click on Emergency Contact button.{"\n"}4. Click on "Add" under Attachment.{"\n"}5. Select the file from relevant path and click on "Upload".</td>
                  <td className="p-4 text-slate-500">N/A</td>
                  <td className="p-4">Attachment file should appear under Attachment.</td>
                  <td className="p-4">The requirement document contains "Upload" button but application contains "Save" button</td>
                  <td className="p-4"><span className="text-orange-600 font-bold bg-orange-100 px-2 py-1 rounded dark:bg-orange-900/30">Partially Passed</span></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium whitespace-nowrap">TC_MyInfo_047</td>
                  <td className="p-4 whitespace-nowrap">Orange HRM-MyInfo</td>
                  <td className="p-4">3.1.11</td>
                  <td className="p-4">ESS user can delete Membership</td>
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-200">Verify ESS user is able to delete Membership .</td>
                  <td className="p-4 whitespace-pre-wrap">1. Login to OrangeHRM as ESS User.{"\n"}2. Click on MyInfo tab.{"\n"}3. Click on Membership button.{"\n"}4. Click on the check box next to particular entry.{"\n"}5. Click on "Delete".</td>
                  <td className="p-4 text-slate-500">N/A</td>
                  <td className="p-4">One or more of the selected entry/ies should be deleted.</td>
                  <td className="p-4">As expected</td>
                  <td className="p-4"><span className="text-emerald-600 font-bold bg-emerald-100 px-2 py-1 rounded dark:bg-emerald-900/30">Passed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bug Report Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Bug Report Sample</h2>
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold whitespace-nowrap">Bug ID</th>
                  <th className="p-4 font-semibold whitespace-nowrap min-w-[160px]">Module Name</th>
                  <th className="p-4 font-semibold whitespace-nowrap">Build #</th>
                  <th className="p-4 font-semibold min-w-[300px]">Description</th>
                  <th className="p-4 font-semibold whitespace-nowrap">TC ID</th>
                  <th className="p-4 font-semibold min-w-[300px]">Steps to Replicate</th>
                  <th className="p-4 font-semibold text-center">Severity</th>
                  <th className="p-4 font-semibold text-center">Priority</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600 dark:text-slate-400 divide-y divide-slate-100 dark:divide-slate-700/50">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium whitespace-nowrap">ORHRM_002</td>
                  <td className="p-4">Orange HRM-MyInfo</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-slate-800 dark:text-slate-200">The requirement document contains "Upload" button but application contains "Save" button in Emergency contact Attachment.</td>
                  <td className="p-4 whitespace-nowrap">TC_MyInfo_014</td>
                  <td className="p-4 whitespace-pre-wrap">1. Login to OrangeHRM as ESS User.{"\n"}2. Click on MyInfo tab.{"\n"}3. Click on Emergency Contact button.{"\n"}4. Click on "Add" under Attachment.</td>
                  <td className="p-4 text-center"><span className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 px-3 py-1 rounded text-xs font-bold uppercase">S3</span></td>
                  <td className="p-4 text-center"><span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded text-xs font-bold uppercase">P3</span></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium whitespace-nowrap">ORHRM_005</td>
                  <td className="p-4">Orange HRM-MyInfo</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-slate-800 dark:text-slate-200">The requirement document contains "Upload" button but application contains "Save" button in Immigration</td>
                  <td className="p-4 whitespace-nowrap">TC_MyInfo_022</td>
                  <td className="p-4 whitespace-pre-wrap">1. Login to OrangeHRM as ESS User.{"\n"}2. Click on MyInfo tab.{"\n"}3. Click on Immigration button.{"\n"}4. Click on "Add" under Attachment.</td>
                  <td className="p-4 text-center"><span className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 px-3 py-1 rounded text-xs font-bold uppercase">S3</span></td>
                  <td className="p-4 text-center"><span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded text-xs font-bold uppercase">P3</span></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium whitespace-nowrap">ORHRM_006</td>
                  <td className="p-4">Orange HRM-MyInfo</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-slate-800 dark:text-slate-200">"Record not Found" error is shown and the entry is not deleted when you delete Education detail in Qualification under Education</td>
                  <td className="p-4 whitespace-nowrap">TC_MyInfo_032</td>
                  <td className="p-4 whitespace-pre-wrap">1. Login to OrangeHRM as ESS User.{"\n"}2. Click on MyInfo tab.{"\n"}3. Click on Qualification.{"\n"}4. Click on "Add" button under Education.{"\n"}5. Enter all the required fields and Click "Save".{"\n"}6. Click on the check box next to that entry.{"\n"}7. Click on "Delete".</td>
                  <td className="p-4 text-center"><span className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 px-3 py-1 rounded text-xs font-bold uppercase">S2</span></td>
                  <td className="p-4 text-center"><span className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 px-3 py-1 rounded text-xs font-bold uppercase">P2</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md aspect-video relative flex items-center justify-center border border-slate-300 dark:border-slate-700">
               <img src="/ss1.jpg" alt="Screenshot 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
            </div>
            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md aspect-video relative flex items-center justify-center border border-slate-300 dark:border-slate-700">
               <img src="/ss2.jpg" alt="Screenshot 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
            </div>
            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md aspect-video relative flex items-center justify-center border border-slate-300 dark:border-slate-700">
               <img src="/ss3.jpg" alt="Screenshot 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
            </div>
          </div>
        </section>

        {/* Links / Downloads */}
        <section className="mb-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/OrangeHRM-MyInfo.xlsx" download="OrangeHRM-MyInfo.xlsx" className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-emerald-600/30 transition-all hover:scale-105">
                <span className="material-symbols-outlined">download</span>
                Download Excel Report
            </a>
            {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-slate-900/20 dark:shadow-white/20 transition-all hover:scale-105">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
               </svg>
               View on GitHub
            </a> */}
        </section>

        {/* Key Learnings */}
        <section className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-8 rounded-3xl mb-8 shadow-inner">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
             <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
             Key Learnings
          </h2>
          <ul className="space-y-4 text-slate-700 dark:text-slate-300 list-disc list-inside">
            <li>Gained hands-on experience in manual testing processes</li>
            <li>Improved ability to design structured test cases</li>
            <li>Learned effective bug reporting and documentation</li>
            <li>Developed attention to detail while validating application behavior</li>
            <li>Learned the importance of testing beyond the happy path to uncover critical UI/UX and logic defects.</li>
            <li>Strengthened documentation skills through detailed Bug Reports and Test Execution tracking in Excel.</li>
          </ul>
        </section>

      </div>
    </main>
  );
};

export default CaseStudy;
