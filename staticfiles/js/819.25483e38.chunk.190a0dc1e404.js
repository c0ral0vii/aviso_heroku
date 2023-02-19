"use strict";(self.webpackChunkaviso=self.webpackChunkaviso||[]).push([[819],{819:function(s,e,A){A.r(e),A.d(e,{default:function(){return m}});var i=A(1413),a=A(7945),n=A.n(a),t=(A(4655),A(2791)),d=A(5581),o=A(1087),r=(A(6496),A(1912)),c=A(184);var m=function(){t.useEffect((function(){document.title="\u0412\u0445\u043e\u0434 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),[]),(0,t.useEffect)((function(){n().init(),n().refresh()}),[]);var s=(0,d.cI)(),e=s.register,A=s.handleSubmit,a=s.formState.errors;return(0,c.jsx)("div",{className:"profile",children:(0,c.jsx)("div",{className:"profile_wrapper",children:(0,c.jsx)("div",{className:"autorizing_page",children:(0,c.jsxs)("div",{className:"sign_in","data-aos":"fade-up","data-aos-duration":"1000",children:[(0,c.jsx)("h2",{children:"\u0412\u0445\u043e\u0434 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),(0,c.jsxs)("div",{className:"signin_form",children:[(0,c.jsxs)("form",{onSubmit:A((function(s){console.log(s),r.Z.post("http://127.0.0.1:8000/auth/token/login/",{password:s.password,username:s.username}).then((function(s){console.log(s);r.Z.create({baseURL:"http://127.0.0.1:8000/api/",timeout:1e3,headers:{Authorization:s.data.auth_token}})})).catch((function(s){console.log(s)}))})),children:[(0,c.jsxs)("div",{className:"email_sign",children:[(0,c.jsx)("p",{children:"E-mail \u0438\u043b\u0438 \u043b\u043e\u0433\u0438\u043d"}),(0,c.jsx)("input",(0,i.Z)({type:"text"},e("username",{required:!0}))),a.email&&(0,c.jsx)("span",{children:"* E-mail \u0438\u043b\u0438 \u043b\u043e\u0433\u0438\u043d \u043e\u0431\u044a\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b!"})]}),(0,c.jsxs)("div",{className:"password_sign",children:[(0,c.jsx)("p",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),(0,c.jsx)("input",(0,i.Z)({type:"password"},e("password",{required:!0}))),a.password&&(0,c.jsx)("span",{children:"* \u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044a\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439!"})]}),(0,c.jsxs)("div",{className:"login_links",children:[(0,c.jsx)("a",{href:"#",children:(0,c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=",alt:"google icon"})}),(0,c.jsx)("a",{href:"#",children:(0,c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAElEQVR4nO1ZTUwTQRTe4M/Bo787pRo9mejNRCMHNXrTRA8mRKPRowdPapxpQWPjQdH4lwgIaiIXwwGjxqj4dyBqNEoIONNSBQUUin9tMWCRlp+OeYutbLfdzna3LST9kpc0mcfM9+3MvPfmIUkFFFCAeZQ2zLIdZSUI03KE6W1EaLuM2QAibBRM+Y2ZRxnDtHwxoeslFy+S8g3bEfdSmbAzMmE+RBg3YjJmfTKmFcWE2nNOXC5rXYQIuypjGjFKXCuERhChNehIy8KckEcOukcmNGiWeBIhARt5tzt7zA+0zJEJu241cZRomNbCWpZyR66WeQizxqyTJzGjD2FNa9gfaJmTW/Js8kgR9myVyzPXNP+cHBuScidqTJFHmO3NH3mmmA27d2VE3ub0LpAJ8+dbgAwRL5MQC3E+3+TRf6s2RB6yoxVJyrJdwDSCHJ5lwgKgPMg3aaQVUSHG3sWLoE5JNdHnYITHMDYR5Yca+lTjX6aMx9DtDyed61BDHx8dj8b9ulL4Td4F5oOiMS1/parU+RI/hsZ0ydW9DvBkSJxnpaud/xoeV/m8/PhbdxeWkLZ1aQUoJbHOJI88gxpyWy9/jI9vPN8hJKCq6afGZ9+NHv2j5GBOgfNP7+hN4rjj0yx87aU/Pm53utMK2HCug0fGooa+vmKY3RLYAebRm2T1SS8fGZ1QLT74Z5yvPNEe99ETUOxg/HVXSDU2Oh7lmy50iAhgIjuQtlSubx7QEDzV+E1IwJnH3zVj559+F4tEhPnTCxCI/1sudfKo+gQou7Dm1PuUAkrOfuAH63uVyDUV3q8jfFmZW1AADVsiAOx26y8NyVddIeUoGMH26k9C5MUFCL624GsPjqjDYCbYccWIAIEjlO4SJyYis+gdiCiBQWhNwUusG0YT7car5Ikr2R3YX/eZB0PqRAh40flbiU4WhVH9RJZosHCjW5vcEhHz33yxkw8kZGDA2ScCkQgzR1oB0HQyIgBsebmb33wb5HqY6r+ztktVAwEgOm2r1L8PstO9VqyYI7TXqIjYnQgkOSKARN/j9/o1Pm+6Q6nJY/pFuJsHpWsmAsBWHPPwsrv9vLlnmA+NTPDwWJQ3dQwl9b3y3K/aCeb7oyfgtDRjHzSEhu2H24olI1DafdOAPJr8+pWSUdgPe+ZPi0c9poGM+6bQq8y/AFYqmQH0KvMmALMqyTRKG2bJhN7NPXn6QHI1zbauuQsN15wJoPeta+5ObfLmIjJhVmXZl08G6FVmJTph9tP0hRUW4fQugHYfJBizxGVCwxDnIWxLuQZkRyg7Mqmd4G9kTE8bzrBZgYsXQdMJ+jZQs8PDA152UI4oBr8Jpf/GHEpVOR3+zVpAAdLMx19Ok2JA/6SMNQAAAABJRU5ErkJggg==",alt:"vk icon"})})]}),(0,c.jsx)("div",{className:"signin_button",children:(0,c.jsx)("input",{className:"submit_button",type:"submit",value:"\u0412\u041e\u0419\u0422\u0418"})})]}),(0,c.jsx)("div",{className:"password_recovery",children:(0,c.jsx)(o.OL,{to:"/auth",children:(0,c.jsx)("p",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})})})]})]})})})})}},6496:function(){}}]);
//# sourceMappingURL=819.25483e38.chunk.js.706bdd88f5ff.map