var React = require('react-native');
var {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    WebView,
    LayoutAnimation,
    TouchableOpacity,
    TouchableHighlight,
    Modal
} = React;

var {bp, vw, vh} = require('react-native-relative-units')(100);
var SettingsController = require('../SettingsController.js');
var globalStyles=require('../../common/styles/styles.js');


var styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
});
var TermsConditions = React.createClass({
  getInitialState() {
    return {
      info: this.props.info,
      html: '<style type="text/css"> ol {margin-top:10px;} ol li{margin-left:0px; list-style-type:decimal;} ol ol {margin-top:5px;} ol ol li{margin-left:10px; list-style-type:lower-alpha;} .push-left {margin-left: 20px;} </style> <div style="background: #f5fcff;"><p style="text-align:center;"><b><u>TERMS &amp; CONDITIONS</u></b><br /><b>INQUISITHEALTH, INC.</b></p> <p><a name="_DV_M2"></a>Welcome to InquisitHealth, Inc. (the “Site” or “Service”). The following Terms &amp; Conditions (“Terms” or “Agreement”) govern the access to and use of this Site and Services and the information, profiles, materials, text, graphics, images, communications and other content available on or through this Site and shared via our Services (collectively referred to as "Site Material/s" or “Content”), whether contributed by InquisitHealth, Inc. (“InquisitHealth,” “us,” “we,” or “our”) or you (including Peers, Peer Mentors, Peer Ambassadors, <a name="_DV_M4"></a>Administrators, and Visitors <a name="_DV_C4">(all defined below and collectively, “Users”)</a><a name="_DV_M5"></a>.</p> <p><a name="_DV_M6"></a>BY REGISTERING, ACCESSING, USING OR BROWSING THIS SITE, OUR SERVICES OR ANY SITE MATERIALS, YOU INDICATE THAT YOU HAVE READ, UNDERSTOOD AND AGREE TO BE LEGALLY BOUND BY THE TERMS OF THIS AGREEMENT. YOU ALSO INDICATE THAT YOU ARE CONSENTING TO THESE TERMS, WHICH INCLUDE BUT ARE NOT LIMITED TO COLLECTION AND SHARING OF INFORMATION THROUGH OUR SERVICES. IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS, YOU ARE NOT GRANTED PERMISSION TO, AND PLEASE DO NOT ATTEMPT TO, ACCESS THE SITE, SERVICES AND/OR SITE MATERIALS.</p> <p><a name="_DV_M7"></a>WE RESERVE THE RIGHT, IN OUR SOLE DISCRETION, TO UPDATE AND EDIT THESE TERMS AT ANY TIME. YOUR CONTINUED USE OF THIS SITE, SERVICES AND/OR ANY SITE MATERIALS AFTER SUCH CHANGES TAKE EFFECT WILL BE DEEMED TO CONSTITUTE YOUR ACCEPTANCE OF, AND AGREEMENT TO, THE MOST RECENT VERSION OF THESE TERMS. YOU AGREE TO ADHERE TO ANY ADDITIONAL TERMS, POLICIES AND PROCEDURES THAT MAY BE EXPRESSED OR POSTED IN OTHER AREAS OF THIS SITE, INCLUDING THE PRIVACY POLICY THAT YOU CAN REVIEW HERE. </p> <p><a name="_DV_M8"></a><b>THIS SITE, SERVICES, AND ANY SITE MATERIALS AND INTERACTIONS BETWEEN A PEER MENTOR/AMBASSADOR AND PEER ARE NOT INTENDED TO PROVIDE AND DO NOT CONSTITUTE MEDICAL ADVICE NOR TAKE THE PLACE OF INSTRUCTIONS OR ADVICE FROM YOUR HEALTH CARE PROVIDERS. IN THE EVENT OF AN EMERGENCY, CALL 911 OR A MEDICAL PROFESSIONAL IMMEDIATELY.</b> INQUISITHEALTH IS NOT A LICENSED MEDICAL CARE PROVIDER AND PEER AMBASSADORS/MENTORS DO NOT PROVIDE MEDICAL DIAGNOSES OR CLINICAL SERVICES. THEY ALSO DO NOT TREAT OR MANAGE ANY ILLNESS, DISEASE, OR CONDITION THAT IS PHYSIOLOGICAL OR MENTAL. YOU SHOULD NOT CHANGE YOUR CURRENT TREATMENT OR CARE PLAN BASED ON INFORMATION YOU RECEIVE THROUGH OUR SERVICES OR FROM OUR AMBASSADORS/MENTORS. COMMUNICATION WITH OUR AMBASSADORS/MENTORS SERVES AS A SUPPLEMENT TO ANY TREATMENT OR CARE THAT YOU RECEIVE FROM YOUR HEALTHCARE PROVIDER. INFORMATION PROVIDED THROUGH OUR SERVICES AND AMBASSADORS/MENTORS IS SOLELY INFORMATIONAL AND WILL NOT RECOMMEND, ENDORSE, OR ADVERTISE ANY OTHER DRUG, DEVICE, OR TREATMENT. IF YOU HAVE ANY HEALTHCARE RELATED QUESTIONS AT ALL, PLEASE SEEK THE EXPERTISE OF A QUALIFIED MEDICAL PROFESSIONAL AS SOON AS NECESSARY. NEVER TURN DOWN PROFESSOINAL MEDICAL ADVICE OR DELAY SEEING A HEALTHCARE PROFESIONAL BECAUSE OF SOMETHING YOU READ OR HEARD IN CONNECTION WITH OUR SERVICES.</p> <p><a name="_DV_M9"></a>THE TRANSMISSION AND RECEIPT OF THE CONTENT, IN WHOLE OR IN PART, OR COMMUNICATION VIA THE INTERNET, PHONE, E-MAIL OR OTHER MEANS DOES NOT CONSTITUTE OR CREATE A DOCTOR-PATIENT, THERAPIST-PATIENT OR OTHER HEALTHCARE PROFESSIONAL RELATIONSHIP BETWEEN YOU AND INQUISITHEALTH.</p> <p><a name="_DV_M10"></a> </p> <ol start="1" type="1"><li><a name="_DV_M11"></a><b>MEMBERSHIP</b></li> <ol start="1" type="a"><li><a name="_DV_M12"></a><b>Users:</b> Besides InquisitHealth, this Site and our Services can be utilized and accessed by multiple types of Users, each with different privileges. <a name="_DV_C6">Please note the following definitions:</a></li> </ol></ol><p class="push-left"><a name="_DV_M14"></a> i. Peers: Peers will receive support and mentoring. In certain instances the User will be a Caregiver for the Peer. Caregivers will also be bound by these terms and conditions. If you are acting as a Caregiver you hereby certify that you are authorized to act for the Peer with respect to the use of the Service.</p> <p class="push-left"><a name="_DV_M15"></a> ii. Peer Ambassadors/Mentors: Peer Ambassadors/Mentors will provide support and mentoring to Peers. Peer Ambassadors/Mentors shall be identified by Partners (including but not limited to support communities, health plans, and health systems). Peer Ambassadors/Mentors will be asked to provide and confirm Personal Information (as further defined in our Privacy Policy) and to create an Account (as defined below).</p> <p class="push-left">iii. Administrators:Partners will be authorized to access the site according to contracts executed by InquisitHealth and the Partner. <a name="_DV_M16"></a></p> <p class="push-left"><a name="_DV_M17"></a> iv. Visitor: Visitors are unregistered Users who have limited access to the Site and Site Content. If you visit this Site and do not have access as a Peer, Peer Ambassador/Mentor, or Administrator, your authorization to use this Site shall cease.</p> <ol start="1" type="1"><ol start="2" type="a"><li><a name="_DV_M18"></a><b>Accounts</b>: Peers, Peer Ambassadors/Mentors, and Administrators will have an “Account” and are required to update, and keep current, accurate and complete registration information. Your e-mail <a name="_DV_C9">address </a><a name="_DV_M21"></a>will be your username / login, unless you do not have an e-mail address, upon which a username will be created for you. You will be asked to create a password and you are <a name="_DV_C11">solely</a><a name="_DV_M22"></a> responsible for maintaining the confidentiality of your password. You agree not to use the Account, username, or password of another person at any time and to notify InquisitHealth immediately if you suspect any unauthorized use of your Account or access to your password. You are solely responsible for any and all information that is submitted by or through your Account on the Site, including any e-mail, and for your interactions with any other User.<a name="_DV_M23"></a></li> </ol></ol> <ol start="1" type="1"><ol start="3" type="a"><li><a name="_DV_M24"></a><b>Cancellation:</b> InquisitHealth reserves the right to cancel your Account and access to our Site and/or Services, in whole or in part, at any time, without notice, in our sole discretion and with no liability to you if you breach these terms and conditions. We shall not be responsible for maintaining any account information after your Account has been cancelled.</li> </ol></ol><p><a name="_DV_M25"></a> </p> <ol start="2" type="1"><li><a name="_DV_M26"></a><b>SERVICES. </b>This Site facilitates Peer Support or Peer Mentoring. You agree that the use of the Service is also subject to all contracts, terms and conditions, and privacy policy documents related to this Service. </li> </ol> <ol start="3" type="1"><li><a name="_DV_M28"></a><b>LIMITED LICENSE TO SITE AND CONTENT</b>. We hereby grant you, subject to these Terms, a non-exclusive, limited and revocable license to view and use this Site and our Services. You may utilize this Site and our Services only for purposes of participation in the applicable program. No alteration, modification or further reproduction of the Site Materials is permitted. No other use or reproduction of the Site Materials is authorized. You may not otherwise use, download, upload, print, display, perform, reproduce, publish, license, post, transmit, modify, adapt, translate, or distribute any Site Materials, which includes technology, software, and content, in whole or in part without our express written authorization.</li> </ol> <ol start="4" type="1"><li><a name="_DV_M29"></a><b>OWNERSHIP</b>. Site Materials may be protected by copyright and other laws. Except as specified above, nothing contained herein shall be construed as conferring by implication, estoppel, or otherwise any license or right under any patent, trademark or copyright of InquisitHealth or any third party. These materials are also protected by various other intellectual property rights and unfair competition laws. The trademarks, logos, trade dress and service marks ("Marks") displayed on the Site are the property of InquisitHealth or other third parties. You are not permitted to use these Marks without the prior<a name="_DV_M30"></a> written consent of the party that owns the Mark. You are not permitted to remove, modify, sell, license alter, or otherwise exploit any patent, trademark, or copyright any content belonging to InquisitHealth or any third party. InquisitHealth content includes but is not solely limited to: page headers, custom graphics and icons, text, photos, computer code, scripts, multimedia content, educational content, visual interfaces. <p>Although it is within InquisitHealth’s best intentions for our Services to be available as much possible, there will be instances in which Services may be interrupted for reasons including but not limited to: maintenances, upgrades, repairs, or failed communications and/or equipment. InquisitHealth also maintains the right to remove any content from our Services for any reason, without prior notice, though the content may be stored by InquisitHealth. Also note and acknowledge that Internet and mobile platforms that connect to the Internet may be vulnerable to security breaches and therefore, content or other information submitted through these modes may not be secure. </p> </li> </ol> <p><a name="_DV_M32"></a><a name="_DV_M33"></a></p> <ol start="5" type="1"><li><a name="_DV_M34"></a><b>ADVERTISING. </b>This Site may provide links or references to, or advertisements for, sites operated by other parties ("Third Party Sites"), but InquisitHealth has no responsibility for the availability or content of such Third Party Sites and shall not be liable for any damages or injury arising from that content. Any links to other Third Party Sites are provided as merely a convenience to Users and the inclusion of the links does not imply an endorsement. You agree that InquisitHealth is not responsible for the content or performance of these Third Party Sites, including opinions, advice, statements and advertisements; that InquisitHealth is not responsible for any loss or damage of any sort you may incur from dealing with any such third party; and that you bear all risks associated with the use of such content.</li> </ol> <ol start="6" type="1"><li><a name="_DV_M35"></a><b>ACCEPTABLE USE AND CONDUCT<a name="_DV_M36"></a></b></li> </ol> <ol start="6" type="1"><ol start="1" type="a"><li><b>Confidentiality. </b>You will be exposed to personal and confidential information while using our Site and Services. You shall abide by the confidentiality laid in all contracts, terms and conditions, and privacy policy documents related to this Service. </li> </ol></ol> <ol start="6" type="1"><ol start="2" type="a"><li><b>Non-confidential information. </b>We will not accept or consider content, information, ideas, suggestions, or other collateral excluding those that we requested and to which certain terms, conditions, and requirements may apply. This is done to avoid misunderstandings if your ideas are similar to those that we developed or are in process of developing. InquisitHealth generally does not accept materials or ideas that we have not requested and therefore, do not take responsibility for any materials or ideas received. Despite our policy, if you do choose to send us content, information, ideas, suggestions, questions, comments, or other collateral, you additionally agree that InquisitHealth is free to use any of this for any purpose, which includes, without limitation, developing and marketing of products and services, without liability or payment of any kind to you. This collateral will be considered to be non-confidential and we have no obligation of any kind with respect to this type of information. We will be allowed to use any ideas, concepts, or content contained in such communication for any purpose, which includes but is not limited to developing products and content for our Services. You recognize that the information in our Services or interactions with others through our Services, is provided “as is” for general information only. You further recognize that opinions, recommendations, and advocacy received through our Service or shared by others with you through our Services, are not necessarily those of InquisitHealth or endorsed by us. </li> </ol></ol><p><a name="_DV_M38"></a> </p> <ol start="6" type="1"><ol start="3" type="a"><li><a name="_DV_M39"></a><b>Unauthorized Use. </b>You agree to make your best effort to prevent third parties from misappropriating or obtaining unauthorized access, or use of the Site and Services (collectively “Unauthorized Use”). In the event that you learn of an Unauthorized Use, You shall promptly and fully inform InquisitHealth of all facts known to you with respect to such Unauthorized Use. InquisitHealth may<a name="_DV_M40"></a> institute any legal action or proceeding to obtain any relief permitted in law, equity or both, against any persons or entities causing, directly or indirectly, such Unauthorized Use, and if any such action or proceeding is instituted, you shall reasonably cooperate with InquisitHealth in connection therewith. </li> </ol></ol> <ol start="6" type="1"><ol start="4" type="a"><li><a name="_DV_M41"></a><b>Site Security. </b>For the protection of InquisitHealth this Site may use electronic measures for protection. You agree not to, nor attempt to, disable or interfere with any such measures. Any circumvention or interference with such measures may result in civil and criminal penalties.</li> </ol></ol> <ol start="7" type="1"><li><a name="_DV_M42"></a><b>LIMITATION OF LIABILITY. </b>TO THE EXTENT LEGALLY PERMITTED UNDER APPLICABLE LAW, INQUISITHEALTH SHALL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND, LOSSES OF ANY KIND, OR INJURY OF ANY KIND RESULTING FROM YOUR ACCESS TO, OR INABILITY TO ACCESS, THIS SITE, OR FROM YOUR RELIANCE ON ANY CONTENT PROVIDED AT THIS SITE, AND IN NO EVENT SHALL INQUISITHEALTH OR IT’S AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, EXEMPLARY, SPECIAL OR CONSEQUENTIAL DAMAGES, INCURRED BY YOU WHETHER IN AN ACTION IN CONTRACT OR TORT, ARISING FROM YOUR ACCESS TO, OR USE OF, THE SITE OR ANY OF OUR SERVICES FOR THAT MATTER, WHETHER OR NOT INQUISITHEALTH HAS BEEN ADVISED OF THE POSSIBILITY. THESE DAMAGES MAY BE DIRECTLY OR INDIRECTLY RELATED TO AND ARE NOT EXCLUSIVELY LIMITED TO: OUR SERVICES; THE APPLICATION; OUR CONTENT; ANY USER CONTENT; YOUR USE OF OUR SERVICES; THE PERFORMANCE OF OUR SERVICES; ANY ACTIONS TAKEN IN CONNECTION WITH INVESTIGATIONS BY INQUISITHEALTH OR LAW ENFORCEMENT REGARDING YOU OR ANY OTHER PARTY’S USE OF OUR SERVICES; ANY ACTION TAKEN RELATED TO COPYRIGHT OR OTHER INTELLECTUAL PROPERTY OWNERS; ANY ERRORS IN OUR SERVICES’ OPERATIONS; DAMAGE TO ANY USER’S COMPUTER, MOBILE DEVICE, OR OTHER EQUIPMENT AND TECHNOLOGY. IN NO SITUATION WILL INQUISITHEALTH AND IT’S PARTIES BE LIABLE TO YOU OR ANYONE ELSE FOR SUCH DAMAGES. </li> </ol> <ol start="8" type="1"><li><b>INDEMNITY. </b>YOU AGREE TO HOLD THE FOLLOWING PERSONS AND ENTITIES HARMLESS FROM AND AGAINST ANY CLAIMS, ACTIONS, DEMANDS, LIABILITIES, AND SETTLEMENTS (THE AFORMENTIONED TERMS INCLUDE WITHOUT LIMITATION, ANY REASONABLE LEGAL AND ACCOUNTING FEES, ANY OF WHICH ARE RESULTING FROM OR ALLEGEDLY ARE RESULTING FROM YOUR USE OF ANY OF OUR SERVICES): INQUISITHEALTH, INQUISITHEALTH’S OFFICERS, INQUISITHEALTH’S DIRECTORS, PARTNERS, EMPLOYEES, CONTRACTORS, AGENTS, LICENSORS, SUPPLIERS. <p>WE ARE NOT LEGALLY RESPONSIBLE FOR ANY ACTIONS YOU DECIDE TO TAKE BECAUSE OF ANY OUTCOME THAT RESULTS FROM YOUR USE OF OUR SERVICES. THEREFORE, YOU AGREE TO DEFEND, INDEMNIFY, AND HOLD INQUITSITHEALTH AND ALL RELEVANT ENTITIES AND PERSONS HARMLESS AGAINST ANY LOSSES, DAMAGES, OR EXPENSES OF WHATEVER FORM. THIS INCLUDES EXPENSES LIKE ATTORNEY FEES AND OTHER RELATED LEGAL DEFENSE COSTS, DIRECT OR INDIRECT, THAT YOU MAY POTENTIALLY INCUR AS A RESULT OF YOUR ACTIONS, WHICH INCLUDE BUT ARE NOT LIMITED TO, (1) BREACH OF ANY EXCERPT OF THESE TERMS AND CONDITIONS, (2) NEGLIGENCE OR OTHER MISCONDUCT, (3) YOUR USE OF OUR SERVICES. </p> </li> </ol> <ol start="9" type="1"><li><b>ENROLLED USER CONDUCT. </b>THIS MEANS THAT YOU, AND NOT INQUISITHEALTH, ARE RESPONSIBLE FOR ANY RISKS AND LIABILITIES FOR CONTENT THAT YOU DECIDE TO SHARE OR OTHERWISE MAKE AVAILABLE THROUGH THE MENTORING PROGRAM AND MOBILE APPLICATION SERVICE. WHEN USING ANY OF OUR AFOREMENTIONED SERVICES, YOU MUST NOT SHARE OR OTHERWISE MAKE AVAILABLE ANY CONTENT THAT IS, WITHIN THE JURISDICTION OF OUR SERVICES, UNLAWFUL, HARASSING, ABUSIVE, HARMFUL, OBSCENE, INVASIVE OF ANOTHER PERSON’S PRIVACY, OR HATEFUL WITH RACIALLY OR ETHNICALLY-CHARGED CONNOTATIONS. WILLFUL PARTICIPATION IN OUR SERVICES ALSO CONFIRMS THAT ALL ADDITIONAL INFORMATION YOU PROVIDE DURING AND FOLLOWING REGISTRATION WILL BE ACCURATE AND CURRENT. YOU AGREE TO UPDATE YOUR INFORMATION AS NEEDED TO MAINTAIN ITS ACCURACY AND RELEVANCE. <p>AS DEFINED BY HIPAA (THE FEDERAL HEALTH INFORMATION PRIVACY AND ACCOUNTABILITY LAW), WE ARE A “BUSINESS ASSOCIATE,” AND HAVE CERTAIN FEDERAL, STATE, AND CONTRACTUAL GUIDELINES THAT DEFINE HOW WE CAN USE YOUR PROTECTED HEALTH INFORMATION. EXCLUDING REASONS REQUIRED BY LAW OR WITH YOUR CONSENT, WE MAY NOT USE OR DISCLOSE YOUR PROTECTED HEALTH INFORMATION. HOWEVER, FOR PURPOSES OF RESEARCH, WE MAY USE YOUR IDENTIFICABLE INFORMATION INTERNALLY IN THE EFFORTS TO IMPROVE OUR SERVICES. </p> <p>YOU FURTHER ACKNOWLEDGE AND AGREE THAT INQUISITHEALTH’S AFOREMENTIONED SERVICES AND MANAGEMENT OF THEM MAY POTENTIALLY DISCLOSE CONTENT IF REQUIRED BY LAW OR IN GOOD FAITH BELIEF THAT PRESERVATION OR DISCLOSURE OF CONTENT IS REASONABLY NECESSARY IN ORDER TO: 1) COMPLY WITH THE LEGAL PROCESS 2) ENACT TERMS OF USE C) RESPOND TO CLAIMS STATING THAT ANY CONTENT VIOLATES THE RIGHTS OF THIRD PARTIES 4) PROTECT THE RIGHTS, PROPERTY, OR SAFETY OF INQUISITHEALTH, IT’S USERS, AND THE PUBLIC. </p> </li> </ol> <ol start="10" type="1"><li><a name="_DV_M43"></a><b>DISCLAIMER OF WARRANTIES. </b>INQUISITHEALTH MAKES NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, AS TO THE SERVICE OR THE SITE AND ALL CONTENT AND SERVICES PROVIDED ON THE SITE, ARE PROVIDED ON AN "AS IS" BASIS. USERS ARE SOLELY RESPONSIBLE FOR DETERMINING WHETHER THE INFORMATION PROVIDED IS SUITABLE FOR THEIR PURPOSES, AND RELIANCE ON THE INFORMATION IS AT THE USERS\' SOLE RISK. WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE ERROR-FREE, COMPLETLEY ACCURATE, UNINTERRUPTED, THAT DEFECTS WILL BE IMMEDIATELY CORRECTED, OR THAT OUR SERVICES WILL BE FREE FROM HARMFUL COMPONENTS. USERS SHOULD OBTAIN ANY ADDITIONAL INFORMATION NECESSARY TO MAKE AN INFORMED DECISION. INQUISITHEALTH ASSUMES NO RESPONSIBILITY OR LIABILITY FOR ANY INTERACTION BETWEEN ANY PEER AND ANY PEER AMBASSADOR/MENTOR, OR ADVICE OR TREATMENT, OR SERVICES RENDERED BY ANY SPONSORING COMMUNITY, HOSPITAL, PHYSICIAN, OR OTHER HEALTH CARE PROVIDER, HEALTH CARE FACILITY OR HEALTH PLAN. TO THE EXTENT LEGALLY PERMITTED UNDER APPLICABLE LAW, INQUISITHEALTH EXPRESSLY DISCLAIMS ALL WARRANTIES AND ENDORSEMENTS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT, CUSTOM, TRADE, QUIET ENJOYMENT, SYSTEM INTEGRATION, AND FREEDOM FROM COMPUTER VIRUSES. ACCESSING OR USING OUR SERVICES CONFIRMS THAT YOUR ACTIVITES ARE LAWFUL IN THE JURISDICTIONS WHERE YOU ACCESS OR USE OUR SERVICES. INQUISITHEALTH DISCLAIMS ANY RESPONSIBILITY OR LIABILITY TO ANY ENTITY FOR ANY KIND OF LOSS, ANY KIND OF DAMAGE, ANY KIND OF INJURIES, ANY KIND OF CLAIMS, OR OTHER CAUSES OF ANY TYPE BASED UPON OR RESULTING FROM CONSUMPTION OF ANY CONTENT. </li> </ol> <ol start="11" type="1"><li><a name="_DV_M44"></a><b>GENERAL PROVISIONS</b></li> </ol><p><a name="_DV_M45"></a></p> <ol start="11" type="1"><ol start="1" type="a"><li><a name="_DV_M46"></a><b>Governing Law</b>. This Agreement, and any claim, controversy or dispute arising under or related to this Agreement, the relationship of the parties and/or the interpretation and enforcement of their respective rights and obligations, shall be governed by and construed in accordance with the laws of the State of New York, without regard to principles of conflicts of law. The parties hereto agree to the exclusive jurisdiction of the courts located in the State of New York and the exclusive venue of New York County.</li> </ol></ol><p><a name="_DV_M48"></a></p> <ol start="11" type="1"><ol start="2" type="a"><li><a name="_DV_M50"></a><b>Severability; Modification; Waiver</b>. If any provision of this Agreement is held invalid or otherwise unenforceable, the enforceability of the remaining provisions of this Agreement will not be impaired thereby. The failure by any party to exercise any right or remedy provided for herein will not be deemed a waiver of any right or remedy hereunder. Unless expressly otherwise provided herein. No modification of or amendment to this Agreement shall be valid unless in writing and signed by both parties. Accessing our services also confirms that you understand that you may be waiving rights to claims that are, at this time, unknown or unanticipated. In compliance with such waiver, you recognize that you read, understand, and waive protection from any statute of any state or jurisdiction where you may use our Services, relating to the waiver of unknown claims. </li> </ol></ol> <ol start="11" type="1"><ol start="3" type="a"><li><b>Access. </b>InquisitHealth maintains the right to refuse access to our Services for any reason at any time. InquisitHealth maintains the right to, but has no obligation to, remove, monitor, or block content and accounts that promote or contain content that is determined to violate these Terms and Conditions. Use common sense, caution, and your best judgment when you send, submit, or post content that contains any personal or health information. You also agree to take full responsibility for all data charges, whether this corresponds to phone, internet, or mobile phone usage, you incur through use of our Services.</li> </ol></ol> <ol start="11" type="1"><ol start="4" type="a"><li><b>Territorial restrictions. </b>Information provided within our Services at this present time is meant for users in the United States. It is not meant for distribution to or use by any entity in any jurisdiction or country where such distribution or use would be unlawful or against regulations, which would require InquisitHealth to register within such jurisdiction or country. We maintain the right to limit the availability of our Services or any component of our Services, to any person, geographic area, or jurisdiction, at any time. </li> </ol></ol><p><a name="_DV_M51"></a></p> <ol start="11" type="1"><ol start="5" type="a"><li><b>Entire Agreement</b>. These Terms, including those incorporated by reference, constitute the entire agreement between you and us regarding the use of the Site, Services and its Contents. Any false or invalid assignment by you without accurate and valid written consent of InquisitHealth will be deemed null and avoid. InquisitHealth may assign these Terms and Condition, our Services, or any other rights hereunder, without your consent. </li> </ol></ol><p><a name="_DV_X0"></a><a name="_DV_M52"></a> </p> <p>© <i class="italic">InquisitHealth, Inc.</i></p> <p>This Policy was last updated September 2015.</p></div>'
    };
  },
  render() {
    return (
      <View style={[styles.container, globalStyles.container]}>
        <WebView style={{width:vw * 100, height: vh * 90}} html={this.state.html} />
      </View>
    );
  }
});

module.exports = TermsConditions;