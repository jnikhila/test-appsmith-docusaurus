"use strict";(self.webpackChunktest_appsmith_with_docusaurus=self.webpackChunktest_appsmith_with_docusaurus||[]).push([[202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const a={description:"Appsmith can be deployed locally or on your private instance using Docker"},r="Docker",s={unversionedId:"getting-started/setup/installation-guides/docker/README",id:"getting-started/setup/installation-guides/docker/README",title:"Docker",description:"Appsmith can be deployed locally or on your private instance using Docker",source:"@site/docs/getting-started/setup/installation-guides/docker/README.md",sourceDirName:"getting-started/setup/installation-guides/docker",slug:"/getting-started/setup/installation-guides/docker/",permalink:"/test-appsmith-docusaurus/getting-started/setup/installation-guides/docker/",draft:!1,editUrl:"https://github.com/jnikhila/test-appsmith-docusaurus/blob/main/test-appsmith-docusaurus/docs/getting-started/setup/installation-guides/docker/README.md",tags:[],version:"current",frontMatter:{description:"Appsmith can be deployed locally or on your private instance using Docker"},sidebar:"tutorialSidebar",previous:{title:"DigitalOcean",permalink:"/test-appsmith-docusaurus/getting-started/setup/installation-guides/digitalocean"},next:{title:"Migrate from Multi-Container setup",permalink:"/test-appsmith-docusaurus/getting-started/setup/installation-guides/docker/migrate"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start (with docker-compose)",id:"quick-start-with-docker-compose",level:2},{value:"Docker-compose configuration",id:"docker-compose-configuration",level:3},{value:"Updating Appsmith (with docker-compose)",id:"updating-appsmith-with-docker-compose",level:3},{value:"Enabling Appsmith Auto-updates (with docker-compose)",id:"enabling-appsmith-auto-updates-with-docker-compose",level:3},{value:"Explore Appsmith (without docker-compose)",id:"explore-appsmith-without-docker-compose",level:2},{value:"Community Edition",id:"community-edition",level:3},{value:"Business Edition",id:"business-edition",level:3},{value:"Restarting Containers",id:"restarting-containers",level:2},{value:"Updating Appsmith (without docker-compose)",id:"updating-appsmith-without-docker-compose",level:3},{value:"Community Edition",id:"community-edition-1",level:4},{value:"Business Edition",id:"business-edition-1",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Further Reading",id:"further-reading",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Docker is an open-source ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/in-en/cloud/learn/containerization"},"containerization")," platform. It enables developers to package applications into containers\u2014standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment."),(0,i.kt)("p",null,'{% embed url="',(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Tde7GqE6FQQ%22"},'https://www.youtube.com/watch?v=Tde7GqE6FQQ"')," %}"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," (version 20.10.7 or later)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-Compose "),"(version 1.29.2 or later)")),(0,i.kt)("p",null,"Create an installation folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"appsmith")," where you would like your Appsmith installation and data storage."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the installation folder."),(0,i.kt)("h2",{id:"quick-start-with-docker-compose"},"Quick Start (with docker-compose)"),(0,i.kt)("p",null,"The Appsmith Docker image is built with all the components required to run within a single Docker container. All these multiple processes are managed by a Supervisord instance, which is a lightweight process manager."),(0,i.kt)("p",null,'{% hint style="warning" %}\nYou can expect one container running when using the ',(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose ps")," command. Something like:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"#Container appsmith Running"),"\n{% endhint %}"),(0,i.kt)("h3",{id:"docker-compose-configuration"},"Docker-compose configuration"),(0,i.kt)("p",null,'{% hint style="info" %}\nCurrently, auto-update is disabled on the docker-compose file. If you want to enable auto-update for Appsmith, please uncomment all the commented lines in the docker-compose file.\n{% endhint %}'),(0,i.kt)("p",null,"Download the below ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file into the appsmith installation folder"),(0,i.kt)("p",null,'{% file src="/img/docker-compose_(1).yml" %}'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"or")," run the following curl if you're on a remote machine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://bit.ly/32jBNin -o $PWD/docker-compose.yml\n")),(0,i.kt)("p",null,'{% hint style="warning" %}\nFor the ',(0,i.kt)("strong",{parentName:"p"},"Business Edition")," - change the ",(0,i.kt)("strong",{parentName:"p"},"image")," name from ",(0,i.kt)("inlineCode",{parentName:"p"},"appsmith-ce")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"appsmith-ee")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"image:")," key in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file.\n{% endhint %}"),(0,i.kt)("p",null,"This configuration runs an Appsmith instance and a Watchtower instance to keep Appsmith automatically up-to-date."),(0,i.kt)("p",null,'{% hint style="warning" %}\nFor the ',(0,i.kt)("strong",{parentName:"p"},"Business Edition")," - add your ",(0,i.kt)("strong",{parentName:"p"},"license key")," (",(0,i.kt)("inlineCode",{parentName:"p"},"APPSMITH_LICENSE_KEY"),") to the ",(0,i.kt)("inlineCode",{parentName:"p"},"environment:")," key in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file.\n{% endhint %}"),(0,i.kt)("p",null,"Bring the docker container up by running the following command. (You may need to run as ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," if docker and docker-compose are not accessible by your user)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,i.kt)("p",null,"If it is not available locally, the command above will download the Docker images and start the services. You can follow the logs with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f appsmith\n")),(0,i.kt)("p",null,"You should see a message ",(0,i.kt)("inlineCode",{parentName:"p"},"Appsmith is Running!")," once the container is ready. If this is your first time using docker, you should expect a welcome page similar to the one below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Welcome Page",src:n(1714).Z,width:"1485",height:"784"})),(0,i.kt)("p",null,'{% hint style="success" %}\nCongratulations! Your Appsmith server should be up and running now. You can access it at ',(0,i.kt)("a",{parentName:"p",href:"http://localhost"},"http://localhost"),".\n{% endhint %}"),(0,i.kt)("h3",{id:"updating-appsmith-with-docker-compose"},"Updating Appsmith (with docker-compose)"),(0,i.kt)("p",null,"To update Appsmith (configured with docker-compose) manually, go to the root directory of your setup and run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose pull && docker-compose rm -fsv appsmith && docker-compose up -d\n")),(0,i.kt)("h3",{id:"enabling-appsmith-auto-updates-with-docker-compose"},"Enabling Appsmith Auto-updates (with docker-compose)"),(0,i.kt)("p",null,"If your Appsmith setup does not have auto-update enabled (i.e. it will not have the Watchtower container running along with Appsmith in the host machine). You can enable auto-update by following the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the root directory of your Appsmith set up and run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose down\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file with any text editor and uncomment all the lines that are commented out (lines 13-23)."),(0,i.kt)("li",{parentName:"ol"},"Run the command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,i.kt)("h2",{id:"explore-appsmith-without-docker-compose"},"Explore Appsmith (without docker-compose)"),(0,i.kt)("p",null,"To quickly get Appsmith up and running, run the following command on your machine:"),(0,i.kt)("h3",{id:"community-edition"},"Community Edition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" --pull always appsmith/appsmith-ce\n')),(0,i.kt)("h3",{id:"business-edition"},"Business Edition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'docker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" -e APPSMITH_LICENSE_KEY=<Add_YOUR_LICENSE_KEY> --pull always appsmith/appsmith-ee\n')),(0,i.kt)("p",null,"This command will download the image and start Appsmith. Once the download is complete, the server should be up in under a minute. You can follow the logs with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f appsmith\n")),(0,i.kt)("p",null,"You should see the message ",(0,i.kt)("inlineCode",{parentName:"p"},"Appsmith is Running!")," once the container is ready"),(0,i.kt)("h2",{id:"restarting-containers"},"Restarting Containers"),(0,i.kt)("p",null,"If your containers are failing to restart, you can execute the below script to bring them up:"),(0,i.kt)("p",null,'{% file src="/img/restart-container.sh" %}\nrestart-containers.sh\n{% endfile %}'),(0,i.kt)("p",null,"copy the script to your installation folder and make it executable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x restart-containers.sh\n./restart-containers.sh\n")),(0,i.kt)("h3",{id:"updating-appsmith-without-docker-compose"},"Updating Appsmith (without docker-compose)"),(0,i.kt)("p",null,"To update Appsmith manually, go to the root directory of your setup and run the following commands:"),(0,i.kt)("h4",{id:"community-edition-1"},"Community Edition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'docker rmi appsmith/appsmith-ce -f\ndocker pull appsmith/appsmith-ce\ndocker rm -f appsmith\ndocker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" appsmith/appsmith-ce\n')),(0,i.kt)("h4",{id:"business-edition-1"},"Business Edition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'docker rmi appsmith/appsmith-ee -f\ndocker pull appsmith/appsmith-ee\ndocker rm -f appsmith\ndocker run -d --name appsmith -p 80:80 -v "$PWD/stacks:/appsmith-stacks" -e APPSMITH_LICENSE_KEY=<YOUR_LICENSE_KEY> appsmith/appsmith-ee\n')),(0,i.kt)("p",null,'{% hint style="info" %}\nFollow the instructions to ',(0,i.kt)("a",{parentName:"p",href:"../../upgrade-to-business-edition/"},"upgrade your existing installation")," to a Business Edition.\n{% endhint %}"),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you encounter any errors during this process, check out our guide on ",(0,i.kt)("a",{parentName:"p",href:"../../../../help-and-support/troubleshooting-guide/deployment-errors.md"},"debugging deployment errors"),". If you are still facing any issues, please reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@appsmith.com"},"support@appsmith.com")," or join our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/rBTTVJp"},"Discord Server")," to speak to the Appsmith team directly!"),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../instance-configuration/#configuring-docker-installations"},"Configuring Self Hosted Instances")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../instance-management/"},"Managing the Appsmith instance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../../../learning-and-resources/tutorials/"},"Tutorials"))))}u.isMDXComponent=!0},1714:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image_(1)_(1)-cf77bd6a802b7b631b4e46447b5d343d.png"}}]);