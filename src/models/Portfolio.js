const { Schema, model } = require("mongoose");
const { WEBSITE } = require(`../settings/Config`)

const schema = Schema({
  websiteTitle: String,
  realName: String,
  publicMail: String,
  //Texts
  aboutText: String,
  interestText: String,
  // Tools Languages
  html: Boolean,
  css: Boolean,
  javascript: Boolean,
  angular: Boolean,
  react: Boolean,
  nodejs: Boolean,
  less: Boolean,
  wordpress: Boolean,
  gulp: Boolean,
  grunt: Boolean,
  npm: Boolean,
  // Links
  githubLink: String,
  facebookLink: String,
  twitterLink: String,
  linkednLink: String,
  //Array
  awards: Array,
  skillsWorkflow: Array,
  experiences: Array,
  educations: Array,
  // OK
  loginWebsite: { type: Number, default: 0 },
  careEnabled: { type: Boolean, default: false }
});

module.exports = model("Portfolio", schema);
