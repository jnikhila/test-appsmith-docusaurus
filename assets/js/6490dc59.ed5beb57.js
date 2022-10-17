"use strict";(self.webpackChunktest_appsmith_docusaurus=self.webpackChunktest_appsmith_docusaurus||[]).push([[936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=i,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={description:"Deploy Appsmith on AWS with an AMI on the marketplace"},r="AWS AMI",s={unversionedId:"getting-started/setup/installation-guides/aws-ami",id:"getting-started/setup/installation-guides/aws-ami",title:"AWS AMI",description:"Deploy Appsmith on AWS with an AMI on the marketplace",source:"@site/docs/getting-started/setup/installation-guides/aws-ami.md",sourceDirName:"getting-started/setup/installation-guides",slug:"/getting-started/setup/installation-guides/aws-ami",permalink:"/test-appsmith-docusaurus/getting-started/setup/installation-guides/aws-ami",draft:!1,editUrl:"https://github.com/jnikhila/test-appsmith-docusaurus/blob/main/test-appsmith-docusaurus/docs/getting-started/setup/installation-guides/aws-ami.md",tags:[],version:"current",frontMatter:{description:"Deploy Appsmith on AWS with an AMI on the marketplace"},sidebar:"tutorialSidebar",previous:{title:"Ansible",permalink:"/test-appsmith-docusaurus/getting-started/setup/installation-guides/ansible"},next:{title:"AWS ECS",permalink:"/test-appsmith-docusaurus/getting-started/setup/installation-guides/aws-ecs"}},l={},p=[{value:"Tutorial Steps:",id:"tutorial-steps",level:2},{value:"Step 1: Register With Amazon Web Services",id:"step-1-register-with-amazon-web-services",level:3},{value:"Step 2: Generate an SSH key pair",id:"step-2-generate-an-ssh-key-pair",level:3},{value:"Step 3: Create an AWS Security Group",id:"step-3-create-an-aws-security-group",level:3},{value:"Step 4: Deploy Appsmith On AWS Cloud",id:"step-4-deploy-appsmith-on-aws-cloud",level:3},{value:"Application Credentials",id:"application-credentials",level:2},{value:"Option 1: Find Credentials By Checking The System Log On The AWS Cloud Console (EC2)",id:"option-1-find-credentials-by-checking-the-system-log-on-the-aws-cloud-console-ec2",level:3},{value:"Option 2: Find Credentials By Connecting To Your Application Through SSH",id:"option-2-find-credentials-by-connecting-to-your-application-through-ssh",level:3},{value:"Updating Your Appsmith Installation",id:"updating-your-appsmith-installation",level:2},{value:"Update Installation Manually",id:"update-installation-manually",level:3},{value:"Enable Auto-Updates",id:"enable-auto-updates",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Further Reading",id:"further-reading",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws-ami"},"AWS AMI"),(0,i.kt)("h2",{id:"tutorial-steps"},"Tutorial Steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../aws-ami#step-1-register-with-amazon-web-services"},"Register with Amazon Web Services (AWS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../aws-ami#step-2-generate-an-ssh-key-pair"},"Generate an SSH key pair")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../aws-ami#step-3-create-an-aws-security-group"},"Create an AWS Security Group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../aws-ami#step-4-deploy-appsmith-on-aws-cloud"},"Deploy Appsmith on an AWS cloud server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../aws-ami#application-credentials"},"Find Application Credentials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../aws-ami#updating-your-appsmith-installation"},"Updating your Appsmith installation"))),(0,i.kt)("h3",{id:"step-1-register-with-amazon-web-services"},"Step 1: Register With Amazon Web Services"),(0,i.kt)("p",null,"If you already have an Amazon Web Services account, you may skip this step."),(0,i.kt)("p",null,"Please follow the steps ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/"},"detailed here")," in order to create an account on AWS."),(0,i.kt)("h3",{id:"step-2-generate-an-ssh-key-pair"},"Step 2: Generate an SSH key pair"),(0,i.kt)("p",null,"If you already have an SSH key pair for the AWS region you are operating in, you can skip this step."),(0,i.kt)("p",null,"Please follow the steps ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair"},"detailed here")," to generate a new key-pair. You need this key to SSH into your AWS EC2 instance."),(0,i.kt)("h3",{id:"step-3-create-an-aws-security-group"},"Step 3: Create an AWS Security Group"),(0,i.kt)("p",null,"If you already have an existing security group with ports 80, 443 and 22 open, you can skip this step."),(0,i.kt)("p",null,"Appsmith is a web application that requires ports 80 and 443 for HTTP access. It also requires port 22 to be accessible for SSH access. Please follow the steps ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group"},"detailed here")," to create a new security group."),(0,i.kt)("p",null,"While creating the the new security group, please follow the steps ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule"},"detailed here"),' to edit the "Inbound Rules" and make ports 80, 443 and 22 accessible from anywhere.'),(0,i.kt)("h3",{id:"step-4-deploy-appsmith-on-aws-cloud"},"Step 4: Deploy Appsmith On AWS Cloud"),(0,i.kt)("p",null,"The next step is to launch a cloud server with the Appsmith Amazon Machine Image (AMI) running on it. The AWS Console lets you do this in just a couple of clicks. Follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Navigate to the "',(0,i.kt)("strong",{parentName:"li"},"Amazon")," ",(0,i.kt)("strong",{parentName:"li"},'EC2 dashboard"'),", select the \u201c",(0,i.kt)("strong",{parentName:"li"},"AMIs"),"\u201d option in the \u201c",(0,i.kt)("strong",{parentName:"li"},"Images"),"\u201d menu."),(0,i.kt)("li",{parentName:"ol"},'Search for the Appsmith Stack by entering the search term "',(0,i.kt)("strong",{parentName:"li"},"appsmith"),'" in the search bar at the top.'),(0,i.kt)("li",{parentName:"ol"},"Select the image in the list of search results and click the \u201c",(0,i.kt)("strong",{parentName:"li"},"Launch"),"\u201d button."),(0,i.kt)("li",{parentName:"ol"},"On the resulting detail page, review the available server sizes. Select the server size you wish to use and click \u201c",(0,i.kt)("strong",{parentName:"li"},"Review and Launch"),"\u201d to proceed."),(0,i.kt)("li",{parentName:"ol"},"On the review page, click the \u201c",(0,i.kt)("strong",{parentName:"li"},"Edit security groups"),"\u201d link."),(0,i.kt)("li",{parentName:"ol"},"On the \u201c",(0,i.kt)("strong",{parentName:"li"},"Configure Security Group"),"\u201d page, choose the option to \u201c",(0,i.kt)("strong",{parentName:"li"},"Select an existing security group"),"\u201d. Find the security group you created in Step 3 and select it. Click the \u201cReview and Launch\u201d button to proceed."),(0,i.kt)("li",{parentName:"ol"},"Verify that the correct key pair (created in ",(0,i.kt)("a",{parentName:"li",href:"../aws-ami#step-2-generate-an-ssh-key-pair"},(0,i.kt)("strong",{parentName:"a"},"Step 2")),") will be used for the server."),(0,i.kt)("li",{parentName:"ol"},"Confirm your selection by hitting the \u201c",(0,i.kt)("strong",{parentName:"li"},"Launch Instance"),"\u201d button.")),(0,i.kt)("p",null,"The AWS Console will now begin spinning up the new server."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Launch",src:a(4322).Z,width:"3360",height:"1032"})),(0,i.kt)("p",null,"The process usually takes a few minutes. Use the EC2 Dashboard to check the status of the server. Once the server has launched, you will be able to obtain its public IP address from the EC2 Dashboard, as shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"EC2 Detail",src:a(1704).Z,width:"2684",height:"792"})),(0,i.kt)("p",null,"At this point, you should be able to browse to the cloud server, by entering the cloud server IP address or DNS name directly into your browser\u2019s address bar. You should now see your web app home page as shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Login Page",src:a(9763).Z,width:"3340",height:"1760"})),(0,i.kt)("h2",{id:"application-credentials"},"Application Credentials"),(0,i.kt)("p",null,"By default, Appsmith boots up with default user credentials that allow you to login without needing to sign up. The default username is: ",(0,i.kt)("inlineCode",{parentName:"p"},"appsmith@example.com"),". There are two options for obtaining the password."),(0,i.kt)("h3",{id:"option-1-find-credentials-by-checking-the-system-log-on-the-aws-cloud-console-ec2"},"Option 1: Find Credentials By Checking The System Log On The AWS Cloud Console (EC2)"),(0,i.kt)("p",null,'{% hint style="warning" %}\nIMPORTANT: The application password is only available in the system log for the first 24 hours after you first start the instance. We strongly recommend that you note it down immediately on the first boot and save it in a safe place, as you will be unable to access the instance console without it. We also recommend that you change it as soon as possible for security reasons.\n{% endhint %}'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to your EC2 instances dashboard on AWS"),(0,i.kt)("li",{parentName:"ul"},"Select the instance"),(0,i.kt)("li",{parentName:"ul"},"From the \u201cActions\u201d drop-down menu, select the \u201cGet System Log\u201d menu item.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select System Log",src:a(8710).Z,width:"2860",height:"816"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Review the system log until you find the application password. You will also find the default username printed in the logs.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View System log",src:a(619).Z,width:"3168",height:"622"})),(0,i.kt)("h3",{id:"option-2-find-credentials-by-connecting-to-your-application-through-ssh"},"Option 2: Find Credentials By Connecting To Your Application Through SSH"),(0,i.kt)("p",null,"The default application credentials are stored in a standalone file. To obtain these credentials at any time, follow these instructions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SSH into your server using your private key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run the following command to see your application credentials:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  sudo cat /home/ubuntu/appsmith/credential\n")))),(0,i.kt)("h2",{id:"updating-your-appsmith-installation"},"Updating Your Appsmith Installation"),(0,i.kt)("p",null,"You can either choose to update the Appsmith installation manually or choose to enable auto-updates."),(0,i.kt)("h3",{id:"update-installation-manually"},"Update Installation Manually"),(0,i.kt)("p",null,"To update Appsmith manually, ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"ec2")," instance with the username ",(0,i.kt)("inlineCode",{parentName:"p"},"appsmith")," and run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd appsmith && sudo docker-compose pull && sudo docker-compose rm -fsv appsmith && sudo docker-compose up -d\n")),(0,i.kt)("h3",{id:"enable-auto-updates"},"Enable Auto-Updates"),(0,i.kt)("p",null,"If your Appsmith setup does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"auto-update")," enabled that is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Watchtower")," container is not running along with ",(0,i.kt)("inlineCode",{parentName:"p"},"Appsmith")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"host machine"),". Follow the steps below to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"auto-update:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SSH into the ",(0,i.kt)("inlineCode",{parentName:"li"},"ec2")," instance with username ",(0,i.kt)("inlineCode",{parentName:"li"},"appsmith")),(0,i.kt)("li",{parentName:"ul"},"\u2028Change directory to ",(0,i.kt)("inlineCode",{parentName:"li"},"/appsmith")),(0,i.kt)("li",{parentName:"ul"},"Run the below command to stop and remove the container and its resources")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2028docker-compose down\u2028\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file with any text editor and uncomment the lines 13 to 23")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Uncomment the lines from 13 to 23",src:a(4687).Z,width:"1342",height:"1016"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Save the file"),(0,i.kt)("li",{parentName:"ul"},"Run the below command")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2028docker-compose up -d\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you encounter any errors during this process, check out our guide on ",(0,i.kt)("a",{parentName:"p",href:"../../../help-and-support/troubleshooting-guide/deployment-errors.md"},"debugging deployment errors"),", if you are still facing an issue please reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@appsmith.com"},"support@appsmith.com")," or join our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/rBTTVJp"},"Discord Server")," to directly speak to the Appsmith team!"),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../instance-configuration/#configuring-docker-installations"},"Configuring Self Hosted Instances")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../instance-management/"},"Managing the Appsmith instance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../../learning-and-resources/tutorials/"},"Tutorials"))))}c.isMDXComponent=!0},4687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Docker-Compose-Yml-File-UnComment-for-AutoUpdates_(1)-778116a2bc1f8ec1133d9eed74229014.png"},1704:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-ec2-detail-8a25c3ea269c4af3d650c3d6016fbc2d.png"},4322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-launch-2d72d4225413b85a85c181860555663b.png"},9763:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-login-page-4c2f6e1ff15a9f73df2127e8d8f8efe5.png"},8710:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-select-system-log-313ca0849bec7af31f6ee7020767bc98.png"},619:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-system-log-8689a74643566fb249e5cfcbb4d960d4.png"}}]);