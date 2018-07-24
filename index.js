'use strict';
var Alexa=require('alexa-sdk');

var DiseaseInfo=[
{		
	diseaseName:'fever',
    info:'Avoiding sources of infection and maintaining good hygiene practices are the best way to prevent a fever. Some ways to prevent the spread of infection include the following: Proper hygiene: Wash hands frequently. Avoid contact with sick people. It is recommended that you take , Paracetamol , Ibuprofen , Aspirin and  Antipyretic Tablets.'
},
{
	diseaseName:'flu',
	info:'Flu is primarily treated with rest and fluid intake to allow the body to fight the infection on its own. Paracetamol may help cure the symptoms but NSAIDs should be avoided. An annual vaccine can help prevent the flu and limit its complications.It is recommended that  Oseltamivir can be taken for all page people. If you are above seven years of age you can also  take Zanamivir . If you are above eighteen years you can also take  Peramivir. '
},
{
	diseaseName:'dengue',
	info:'It is recommended that you take  paracetamol tablets like Tylenol Calpol and Panadol which can alleviate pain and reduce fever. If you have severe dengue fever, you may need: Supportive care in a hospital'

},
{
diseaseName:'small pox',
info:'There is no treatment or cure for small pox. A vaccine can prevent it, but the vaccines side effect risk is too high to justify routine vaccination for people at low risk of exposure to the virusTaking emergency medication to prevent illness after being exposed to  a disease-causing virus or bacterium , Better consult a doctor.'
},
{
	diseaseName:'tuberclosis',
	info:'Drug treatment is the only effective treatment for TB;Patients with active TB disease should receive at least three drugs as their initial TB drug treatment. Fewer than three drugs can result in the development of resistance ,The drugs like Isoniazid Rifampicin, Pyrazinamide ,Ethambutol, and Streptomycin can work;'
},
{
	diseaseName:'depression',
	info:'Depression treatment may involve psychotherapy ,therapy, medications, or a combination of the two, Prescription drugs, called antidepressants, help alter mood by affecting naturally occurring brain chemicals. There are several categories of antidepressants, but doctors often start with a class of drugs called selective serotonin reuptake inhibitors (SSRIs), and may try other medications if the patients condition did not improve. '
},
{
diseaseName:'diarrhea',
info:'Most cases of diarrhea resolve spontaneously within a few days and all that is needed is to prevent dehydration by replacing lost fluids,Avoid milk products, caffeine, alcohol, and apple and pear juices, because they may worsen diarrhea.Soft, bland foods are recommended as well, including bananas, plain rice, toast, crackers, boiled potatoes, smooth peanut butter, cottage cheese, noodles and applesauce.'
},
{
	diseaseName:'stomach ulcers',
	info:' Treatment of stomach ulcers consists of killing H. pylori and decreasing the amount of acid in the stomach. This requires several types of medications. Physicians may prescribe several antibiotics at once, or use a combination drug such as Helidac to kill H. pylori . Helidac contains two antibiotics along with an acid-reducing drug, and a medication that protects stomach tissue.The doctors will also try to stop other medications ,the patient is taking and might have a role in worsening the ulcers. '
},
{
	diseaseName:'diabetes',
	info:'Diabetes is typically treated with injections of insulin. These shots should be timed with meals and, once a routine is established, are done three or four times per day. The shots should be given around meal times. While insulin is the frontline therapy to control diabetes, more drastic treatments may be recommended in some cases.'
},
{
	diseaseName:'cataract',
	info:'While the use of new eyeglasses, magnifying devices and brighter lights may stave off cataracts effects on vision for a period of time, surgery is the only treatment. Surgery is usually considered when cataracts begin to impinge on quality of life, affecting driving, reading or the ability to perform normal activities. Since cataracts do not damage the eye, there is no harm in delaying the procedure, according to the NEI. Three types of surgery are available:	Small incision cataract surgery ,Extracapsular surgery  and Laser-assisted cataract surgery:'
}
];
		
var handlers=
{
	
    // https://high-loudon-XEV7c4.bespoken.link
	'LaunchRequest': function() {
	this.response.speak('Hello , can you tell me ,from which disease you are suffering ,so that I can tell you the treatment for that').listen('pagal ho kya')
    .listen('hello nikhil')
    this.emit(':responseReady');
    },

        'SessionEndedRequest': function () {
            this.response.speak('Goodbye')
            this.emit(':responseReady')},
            'Unhandled': function() {
                this.response.speak('What')
                this.emit(':responseReady')
            },
	
	
	'DiseaseIntent': function() 
	{
	 var nameOfDisease=this.event.request.intent.slots.diseasenames.value;	
   var i=0;var count=0;
   for(i=0;i<DiseaseInfo.length;i++)
   {
   	
   	if(DiseaseInfo[i].diseaseName===nameOfDisease)
   	{
   		count++;
   		this.response.speak(DiseaseInfo[i].info);
			this.emit(':responseReady');
  	}
  	
    }
   if(count==0)
   {
   	
   		this.response.speak('sorry, your disease is not mentioned in my database');
			this.emit(':responseReady');
   }
		
	},
	
    'AMAZON.StopIntent': function()
    {
    this.response.speak(' If you want to get the treatment details for other disease , Tell the name of disease , or ,  otherwise say cancel ').listen("stop it");
    this.emit(':responseReady'); 
    },
	
    'AMAZON.CancelIntent': function()
    {
    this.response.speak('Thank you for showing your interest in this skill . Please provide the feedback in amazon app for this skill . ');
    this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function()
    {
    this.response.speak('This Skill can be invoked by saying  , what is the treatment of disease  . After that Alexa will ask the user ,   Hello , can you tell me ,from which disease you are suffering ,so that I can tell you the treatment for that . User can then respond by saying any of the following utterances , like . I am having diseasename , or just by saying ,diseasename, . After that Alexa will tell the treatment of that disease if she has that disease in her database . Read the terms and use for more detail . If you want to get the treatment details for other disease , Tell the name of disease , or ,  otherwise say cancel ').listen("helping you");
    this.emit(':responseReady');
    },
   };

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};