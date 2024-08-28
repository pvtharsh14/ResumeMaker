module.exports = ({
  name,
  email,
  phone,
  linkedin,
  github,
  skills,
  exp1_org,
  exp1_pos,
  exp1_desc,
  exp1_dur,
  exp2_org,
  exp2_pos,
  exp2_desc,
  exp2_dur,
  proj1_title,
  proj1_link,
  proj1_desc,
  proj2_title,
  proj2_link,
  proj2_desc,
  edu1_school,
  edu1_year,
  edu1_qualification,
  edu1_desc,
  edu2_school,
  edu2_year,
  edu2_qualification,
  edu2_desc,
  extra_1,
  extra_2,
}) => {
  return `
  <!doctype html>
<html lang="en">

<head>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
    <style>
        body {
            font-family: 'Garamond', serif;
        }

        .highlight {
            background: linear-gradient(to right, #7F00FF, #E100FF);
            color: white;
        }
    </style>
</head>

<body class="bg-gray-100">
    <div class="container mx-auto py-8 px-4">
        <!-- Header Section -->
        <div class="bg-white shadow-md rounded-lg p-6 mb-6 text-center">
            <h1 class="text-4xl font-bold text-indigo-600 mb-2">${name}</h1>
            <p class="text-lg font-medium text-zinc-700 mb-1"><strong>Email:</strong> ${email}</p>
            <p class="text-lg font-medium text-zinc-700 mb-1"><strong>Contact:</strong> (+95)${phone}</p>
            <p class="text-lg font-medium text-zinc-700 mb-1"><strong>LinkedIn:</strong> ${linkedin}</p>
            <p class="text-lg font-medium text-zinc-700"><strong>Github:</strong> ${github}</p>
        </div>

        <!-- Skills Section -->
        <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg mb-6 text-center">
            <h3 class="text-3xl font-extrabold text-white">Skills</h3>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <p class="text-lg text-zinc-800 leading-relaxed">${skills}</p>
        </div>

        <!-- Experience Section -->
        <div class="bg-zinc-200 p-6 rounded-lg shadow-lg mb-6">
            <h3 class="text-2xl font-bold text-indigo-600 text-center">Experience</h3>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <p class="text-lg font-semibold text-zinc-800"><b>${exp1_org}, ${exp1_pos}</b> (${exp1_dur})</p>
            <p class="mt-2 text-zinc-600">${exp1_desc}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <p class="text-lg font-semibold text-zinc-800"><b>${exp2_org}, ${exp2_pos}</b> (${exp2_dur})</p>
            <p class="mt-2 text-zinc-600">${exp2_desc}</p>
        </div>

        <!-- Projects Section -->
        <div class="bg-zinc-200  p-6 rounded-lg shadow-lg mb-6">
            <h3 class="text-2xl font-bold text-teal-600 text-center">Projects</h3>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <p class="text-lg font-semibold text-zinc-800"><b>${proj1_title}</b> (${proj1_link})</p>
            <p class="mt-2 text-zinc-600">${proj1_desc}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <p class="text-lg font-semibold text-zinc-800"><b>${proj2_title}</b> (${proj2_link})</p>
            <p class="mt-2 text-zinc-600">${proj2_desc}</p>
        </div>

        <!-- Education Section -->
        <div class="bg-zinc-200  p-6 rounded-lg shadow-lg mb-6">
            <h3 class="text-2xl font-bold text-green-600 text-center">Education</h3>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <p class="text-lg font-semibold text-zinc-800"><b>${edu1_school}</b> (${edu1_qualification}, ${edu1_year})</p>
            <p class="mt-2 text-zinc-600">${edu1_desc}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <p class="text-lg font-semibold text-zinc-800"><b>${edu2_school}</b> (${edu2_qualification}, ${edu2_year})</p>
            <p class="mt-2 text-zinc-600">${edu2_desc}</p>
        </div>

        <!-- Extra-Curriculars Section -->
        <div class="bg-zinc-200  p-6 rounded-lg shadow-lg mb-6">
            <h3 class="text-2xl font-bold text-yellow-600 text-center">Extra-Curriculars/Activities</h3>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
            <ul class="list-disc pl-5 text-zinc-800">
                <li><b>Languages:</b> ${extra_1}</li>
                <li><b>Hobbies:</b> ${extra_2}</li>
            </ul>
        </div>
    </div>
</body>

</html>

  
      `;
};