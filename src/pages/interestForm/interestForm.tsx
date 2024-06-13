// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const InterestForm: React.FC = () => {
//     const history = useHistory(); // Initialize useHistory hook

//     const [formData, setFormData] = useState({
//         country: '',
//         league: '',
//         player: ''
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         // Simulate saving to localStorage or API call
//         localStorage.setItem('interests', JSON.stringify(formData));
//         // Redirect to home page
//         history.push('/');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="country">관심 국가:</label>
//             <select id="country" name="country" value={formData.country} onChange={handleChange}>
//                 <option value="">Choose...</option>
//                 <option value="ko">한국</option>
//                 <option value="eg">영국</option>
//                 <option value="sp">스페인</option>
//                 <option value="jp">일본</option>
//             </select>
//             <br /><br />

//             <label htmlFor="league">관심 리그:</label>
//             <select id="league" name="league" value={formData.league} onChange={handleChange}>
//                 <option value="">Choose...</option>
//                 <option value="EPL">EPL</option>
//                 <option value="lalea">라 리가</option>
//                 <option value="seA">세리에 A</option>
//                 <option value="klea">K 리그</option>
//             </select>
//             <br /><br />

//             <label htmlFor="player">관심 선수:</label>
//             <select id="player" name="player" value={formData.player} onChange={handleChange}>
//                 <option value="">Choose...</option>
//                 <option value="son">손흥민</option>
//                 <option value="lee">이강인</option>
//                 <option value="me">메시</option>
//                 <option value="ho">호날두</option>
//             </select>
//             <br /><br />

//             <button type="submit">제출</button>
//         </form>
//     );
// };

// export default InterestForm;
