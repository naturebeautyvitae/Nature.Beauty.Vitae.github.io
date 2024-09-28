/* https://www.w3web.net/how-to-add-header-and-footer-in-javascript/ */

function header () {
  with(document) {
       write("<div id='headerMain'>");
          write("<a class='logo' href='./index.html'>"); 
              write("<span class='nav-title'>Nature Beauty Vitae</span>");
          write("</a>"); 
           write("<div class='menuMain'>");
               write("<ul class='menu'>");
                    write("<li><a href='index.html'>Home</a>");
                    write("</li>")
                    write("<li><a href='generalinformation.html'>General Information</a>");
                    write("<li>")
                    write("<li><a href='program.html'>Program</a>");
                    write("</li>")
                    write("<li><a href='aboutme.html'>About Me</a>");
                    write("</li>")
                    write("<li><a href='contact.html'>Contact Us</a>");
                    write("</li>")
                    
              write("</ul>");
           write("</div>");
        write("</div>");
  }
}



function footerContainer(){
      with(document){
        write("<div id='footerMain'>");
           write("<div>");
                    write("<a target='_blank' href='https://uni-goettingen.de/'>");
                        write("<img src='./assets/images/ugoettingen.png' style='width:120px'>");
                    write("</a>");
            write("</div>");
            write("<div class='project-card-text-container'>");
                    write("<a class='button' target='_blank' href='https://uni-goettingen.de/'>");
                        write("University of Göttingen");
                    write("</a>");
            write("</div>");
          write("<div>");
                  write("<a target='_blank' href='https://www.dfg.de/en'>");
                      write("<img src='./assets/images/dfg.pnh.png' style='width:100px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://www.dfg.de/en'>");
                      write("Deutsche Forschungsgemeinschaft");
                  write("</a>");
          write("</div>");
          write("<div>");
                  write("<a target='_blank' href='https://vanriemsdijkfoundation.org/'>");
                      write("<img src='./assets/images/VRF.png' style='width:120px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://vanriemsdijkfoundation.org/'>");
                      write("The Van Riemsdijk Foundation");
                  write("</a>");
          write("</div>");

        write("</div>");
      }
  }

