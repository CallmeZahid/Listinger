// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-300 via-pink-200 to-blue-300 p-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         {/* Page Title */}
//         <h1 className="text-3xl font-extrabold text-purple-800 mb-6 text-center">
//           About <span className="text-pink-500">Listinger</span>
//         </h1>

//         {/* Section Content */}
//         <div className="text-purple-700 leading-relaxed space-y-4">
//           <p>
//             <strong>Listinger</strong> is your ultimate shopping list manager, designed to make your 
//             daily life easier. Whether you are planning for a grocery trip, managing a budget, 
//             or keeping track of your weekly shopping needs, <strong>Listinger</strong> is here to help.
//           </p>

//           <p>
//             Our app allows you to easily organize your shopping lists, add and categorize items, 
//             and even mark items as purchased with a single click. Stay on top of your budget and 
//             never forget an item again!
//           </p>

//           <p>
//             At <strong>Listinger</strong>, we believe in making everyday tasks efficient and enjoyable. 
//             With features like real-time collaboration, budget tracking, and an intuitive interface, 
//             shopping has never been this easy.
//           </p>

//           {/* Mission Statement */}
//           <div className="p-4 bg-purple-100 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold text-purple-900 mb-2">Our Mission</h2>
//             <p>
//               To simplify shopping and empower users to stay organized, save time, 
//               and manage their budgets effectively.
//             </p>
//           </div>

//           {/* How It Works */}
//           <div className="p-4 bg-pink-100 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold text-pink-900 mb-2">How It Works</h2>
//             <ol className="list-decimal list-inside">
//               <li>Add items to your shopping list.</li>
//               <li>Organize them by category for easier access.</li>
//               <li>Mark items as purchased as you shop.</li>
//               <li>Enjoy a seamless shopping experience!</li>
//             </ol>
//           </div>

//           {/* Contact Info */}
//           <div className="p-4 bg-blue-100 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold text-blue-900 mb-2">Get In Touch</h2>
//             <p>
//               Have questions, feedback, or suggestions? We'd love to hear from you! 
//               Contact us at <a href="mailto:support@Listinger.com" className="text-purple-600 underline">support@Listinger.com</a>.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// modified

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-8 italic">
          <span className="text-pink-500">LiSTiNGER</span>
        </h1>

        {/* Introduction Section */}
        <section className="mb-6 text-gray-700 space-y-4">
          <p>
            <strong>LiSTiNGER</strong> is your go-to shopping list manager,
            designed to simplify your everyday life. Whether you're planning a
            grocery run, managing your budget, or organizing weekly errands,{" "}
            <strong>LiSTiNGER</strong> has got you covered.
          </p>
          <p>
            With features like item categorization, real-time collaboration, and
            budget tracking, <strong>LiSTiNGER</strong> ensures you never miss a
            thing while making the process efficient and enjoyable.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-6 p-6 bg-purple-50 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-800 mb-3">
            Our Mission
          </h2>
          <p>
            Our mission is to simplify shopping by helping users stay organized,
            save time, and manage their budgets more effectively.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mb-6 p-6 bg-pink-50 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-pink-800 mb-3">
            How It Works
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Add items to your shopping list.</li>
            <li>Categorize them for better organization.</li>
            <li>Mark items as purchased during shopping.</li>
            <li>Experience hassle-free shopping!</li>
          </ol>
        </section>

        {/* Contact Section */}
        <section className="p-6 bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">
            Get In Touch
          </h2>
          <p>
            Have questions or feedback? We'd love to hear from you! Reach out to
            us at{" "}
            <a
              href="mailto:support@listinger.com"
              className="text-purple-600 underline"
            >
              support@listinger.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;