import React from "react";
import { Link } from "react-router-dom";
import './Admission.css'

const AdmissionsPage = () => {
    return (
         <div id="root">
            <div id="back">
                <h1>Admissions at Vivekanand College</h1>
                    <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p><br/>
                    <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p><br/>
                <h2>Eligibility Criteria for Undergraduate Programs</h2>
                <table className="table-container">
                    <thead>
                        <tr>
                            <th> Program</th>
                            <th>Minimum Qualification</th>
                            <th>Required Subjects </th>
                            <th>Minimum Marks (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>B.Sc. Computer Science  </td>
                            <td>10+2 (or equivalent)</td>
                            <td>Physics, Chemistry, Maths</td>
                            <td>50%</td>
                            
                        </tr>
                        <tr>
                            <td>B.Com. Accounting & Finance</td>
                            <td>10+2 (or equivalent)</td> 
                            <td>Commerce Stream	</td>
                            <td>45%</td>
                             
                        </tr>
                        <tr>
                            <td>B.A. English Literature</td> 
                            <td>10+2 (or equivalent)</td>
                            <td>Any Stream</td>
                            <td>40%</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Application Process</h2>
                <hr/>
                <ol>
                    <li>Online Application: Fill out the application form available on our portal.</li>
                    <li>Document Submission: Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                    <li>Entrance Exam (if applicable):Appear for the college's entrance examination.</li>
                    <li>Merit List & Interview: Check the merit list and attend the interview if shortlisted.</li>
                    <li>Fee Payment: Complete the admission by paying the required fees.</li>
                </ol><br/>
                <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our Courses page or Contact us directly.</p>
            </div>
         </div>
    );
};

export default AdmissionsPage;
