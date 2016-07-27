In this document we will see  how to install and configure the Badge Widgets
Every widget has a basic styling and can be configured to accomodate the design of the partner website

Every widget, excluded the claim widget, at this stage require a PHP compatible webserver to handle the secure login to badgecraft website and some basic interaction. 
Using pure JS to handle the login would expose the username and password of the partner.

There are no special requirements, the widget are written in pure javascript.

The Activity Widget will list the last events on your project.
The OrganizationBadges will list the badges included in a specific project, with active links to the badges.
The OrganizationProject will list the projects created by you, with active links to the projects.
The Claim widget will let people claim Badgecraft badges from your website as a starting point.

---

The Activity Widget require a div with this format:
```html
<div class="widget" id="listactivity"></div>
```

You can se it as an example in the Activities folder (you can try it setting your username and password in the the login.php file and setting the correct url of your login.php and activitylist.php in the getActivitylistAuth.js and loginAuth.js. You have to set your projectID, given to you by badgebcraft, in the getActivitylistAuth.js. This number identify in a unique way your project on the badgecraft website.)

You can change the style using the example css
---

The OrganizationBadges Widget require a div with this format:
```html
<div class="widget" id="listactivity"></div>
```

You can se it as an example in the OrganizationBadges folder (you can try it setting your username and password in the the login.php file and setting the correct url of your login.php and badgelistOrg.php in the getbadgelistOrgAuth.js and loginAuth.js. You have to set your projectID, given to you by badgebcraft, in the getbadgelistOrgAuth.js. This number identify in a unique way your project on the badgecraft website.)

You can change the style using the example css

---

The OrganizationProjects Widget require a div with this format:
```html
<div class="widget" id="listactivity"></div>
```

You can se it as an example in the OrganizationProjects folder (you can try it setting your username and password in the the login.php file and setting the correct url of your login.php and badgelistOrg.php in the getbadgelistProjAuth.js and loginAuth.js.

You can change the style using the example css

---

The Claim your Badge widget only require the claim.js file and a simple form-like structure, like this
```html
 <div class="claimwidget" id="claim">
		<div>
				<input name="ClaimCode" type="text" maxlength="512" id="claimcode" class="claimcode"/>
		</div>
		<div id="claimbutton" class="btn-class" onclick="claim()">CLAIM YOUR BADGE</div>
		
</div>
```

You can change the style using the example css and also personalize the "CLAIM YOUR BADGE" text.
