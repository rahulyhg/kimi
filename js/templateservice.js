var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function() {
  this.title = "Home";
  this.meta = "Google";
  this.metadesc = "Home";

  var d = new Date();
  this.year = d.getFullYear();

  this.init = function() {
    this.header = "views/header.html";
    this.menu = "views/menu.html";
    this.menuother = "views/menu-others.html";
    this.content = "views/content/content.html";
    this.footer = "views/section/footer.html";
  };

  this.changecontent = function(page) {
    this.init();
    var data = this;
    data.content = "views/content/" + page + ".html";
    return data;
  };

  this.init();

});
