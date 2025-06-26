document.addEventListener("DOMContentLoaded", function () {
  const mockData = {
    name: "Shubham Prajapati",
    rank: "Ranger",
    points: 170,625,
    certifications: ["Platform Developer I", "Salesforce Associate", "Data Cloud Consultant"],
    superbadges: ["Apex Specialist", "LWC Specialist", "Integration Specialist"],
    badges: ["Flows", "Process Builder", "REST Integration", "Security", "Reports", "Dashboards"],
    activity: [
      "Earned 'Integration Specialist' Superbadge",
      "Completed 'Security Basics' Module",
      "Achieved Ranger Rank",
      "Completed 'Build a Flow' Project"
    ]
  };

  document.getElementById('trail-rank').textContent = `🏅 Rank: ${mockData.rank}`;
  document.getElementById('trail-points').textContent = `⭐ Points: ${mockData.points.toLocaleString()}`;

  const certList = document.getElementById('trail-certifications');
  const superList = document.getElementById('trail-superbadges');
  const badgeList = document.getElementById('trail-badges');
  const activityList = document.getElementById('trail-activity');

  mockData.certifications.forEach(cert => {
    const li = document.createElement('li');
    li.textContent = cert;
    certList.appendChild(li);
  });

  mockData.superbadges.forEach(sb => {
    const li = document.createElement('li');
    li.textContent = sb;
    superList.appendChild(li);
  });

  mockData.badges.forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    badgeList.appendChild(li);
  });

  mockData.activity.forEach(act => {
    const li = document.createElement('li');
    li.textContent = act;
    activityList.appendChild(li);
  });

  document.getElementById("backToResume").addEventListener("click", function () {
    window.location.href = "index.html"; // Update this path to match your resume file
  });
});
