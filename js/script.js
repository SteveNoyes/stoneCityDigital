/* Toggle navigation when user clicks on hamburger menu */
function toggle() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* GSAP */

function plan() {
gsap.to("#planning", {
  duration: 3,
  ease: "power1.out",
  backgroundColor: "rgba(20, 33, 61, .9)",
  color: "white",
  borderRadius: "8px",
  paddingTop:"30px",
  margin:"20px",
  paddingBottom:"30px"});
}

function comm() {
  gsap.to("#jumpto", {
  	duration: 3,
  	ease: "power1.out",
  	backgroundColor: "rgba(20, 33, 61, .9)",
  	color: "white",
  	borderRadius: "8px",
    paddingTop:"30px",
    margin:"20px",
    paddingBottom:"30px"});
}

function mainten() {

gsap.to("#artCont", {
	duration: 3,
	ease: "power1.out",
	backgroundColor: "rgba(252, 163, 17, .1)",
	borderRadius: "8px",
  paddingTop:"30px",
  margin:"20px",
  paddingBottom:"30px"});

gsap.to("#maintenance", {
	duration: 3,
	ease: "power1.out",
	backgroundColor: "rgba(20, 33, 61, .9)",
	color: "white",
	borderRadius: "8px",
  paddingTop:"30px",
  margin:"20px",
  paddingBottom:"30px"});

gsap.to("#maintenanceGraph", {
	duration: 3,
	ease: "power1.out",
	backgroundColor: "#E5E5E5",
	fontSize: "16px",
  paddingTop:"30px",
  margin:"20px",
  marginTop: "0",
  paddingRight: "20px",
  paddingLeft: "20px",
  paddingBottom:"30px"});
}

/* On-click animation on services page */

function strategyExpand() {
  var strategyText = document.querySelector('#strategyText')
  if (strategyText.style.display === "none") {
   strategyText.style.display = "block";
  } else {
    strategyText.style.display = "none";
  }
}

function brandingExpand() {
  var brandingText = document.querySelector('#brandingText')
  if (brandingText.style.display === "none") {
   brandingText.style.display = "block";
  } else {
    brandingText.style.display = "none";
  }
}

function contentExpand() {
  var contentText = document.querySelector('#contentText')
  if (contentText.style.display === "none") {
   contentText.style.display = "block";
  } else {
    contentText.style.display = "none";
  }
}

function websiteExpand() {
  var websiteText = document.querySelector('#websiteText')
  if (websiteText.style.display === "none") {
   websiteText.style.display = "block";
  } else {
    websiteText.style.display = "none";
  }
}
