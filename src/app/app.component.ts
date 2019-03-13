import { Component, OnInit } from '@angular/core';
import { TickerDataService } from './ticker-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myticker';
  tickerData: any = [];
  tickerShowing: any = [];
  tickerCounter: number = 3;
  userId: any;
  last: number;


  constructor(private service: TickerDataService){}

  ngOnInit() {
/**
 * Receiving api data from external
 */
    // this.service.getData()
    // .subscribe((res) => {
    // this.tickerData = res;
    // })

/**
 * A local array that simulates data
 */
    this.tickerData = [
      {
        "id": "1",
        "name": "david",
        "text": "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף,  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף,- לתכי מורגם בורק? לתיג ישבעס.",
        "image": "data:image/jpeg;base64,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",
        "date": "13/3/2019 7:13"
      },
      {
      "id": "2",
        "name": "chen",
        "text": "ארץ המלחמה טבלאות, שתפו תרומה בה לוח. מיזמי עיצוב ואלקטרוניקה שער אם. על קרן שנתי ננקטת. אל יידיש לטיפול סדר. אנא תרומה בכפוף אודות אם.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgG53ak1Oli4OlsdjOAXNMW7BTDViUDctnWXK52Eoip1wyWyG7",
        "date": "13/3/2019 8:13"
      },
      {
        "id": "3",
          "name": "shahar",
          "text": "ארץ המלחמה טבלאות, על קרן שנתי ננקטת. אל יידיש לטיפול סדר. אנא תרומה בכפוף אודות אם.",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2iCxx8SEaHm0yJc0T0nyergmeGTriUVCVohV8ZoLnD_Imxl8",
          "date": "13/3/2019 9:13"
        },
        {
          "id": "4",
            "name": "natanel",
            "text": "ארץ המלחמה טבלאות, שתפו תרומה בה לוח. מיזמי עיצוב ואלקטרוניקה שער אם. על קרן שנתי ננקטת. אל יידיש לטיפול סדר. אנא תרומה בכפוף אודות אם.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSV3Mkbjit_Y6XV-tXpLAEWSEt1KrYf0I_MGZkJ9WkwF6VGSt7Sw",
            "date": "13/3/2019 12:13"
        },
        {
          "id": "5",
            "name": "elhanan",
            "text": "ארץ המלחמה טבלאות, שתפו תרומה בה לוח. מיזמי עיצוב ואלקטרוניקה שער אם. על קרן שנתי ננקטת. אל יידיש לטיפול סדר. אנא תרומה בכפוף אודות אם.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiIZpyNFeuamVQoRSkPFCxlgYZm90vVe8opol0vhL2fb5lNzKwg",
            "date": "13/3/2019 13:13"
        },
        {
          "id": "6",
            "name": "shay",
            "text": "ארץ המלחמה טבלאות, שתפו תרומה בה לוח. מיזמי עיצוב ואלקטרוניקה שער אם. על קרן שנתי ננקטת. אל יידיש לטיפול סדר. אנא תרומה בכפוף אודות אם.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehDvpGHE-eBeo7_6TkrDMa1b0Wr4ZJpmLO406I8GfslHasuIj",
            "date": "13/3/2019 15:13"
          },
          {
            "id": "7",
              "name": "dan",
              "text": "ארץ המלחמה טבלאות, שתפו תרומה בה לוח. מיזמי עיצוב ואלקטרוניקה שער אם. על קרן שנתי ננקטת. אל יידיש לטיפול סדר. אנא תרומה בכפוף אודות אם.",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStP6S1dObbpWxq-IRskyjKqmbTzfT27kUZb_2OerpLa25E9fkoA",
              "date": "13/3/2019 15:13"
            },
            {
              "id": "8",
              "name": "eli",
              "text": "ארץ המלחמה טבלאות, שתפו תרומה בה לוח. מיזמי עיצוב ואלקטרוניקה שער אם. על קרן שנתי ננקטת. אל יידיש לטיפול סדר. אנא תרומה בכפוף אודות אם.",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUxIlUnWNpMlsguttWRuAYPLCQNONT1oiBZhi5cFiFOAemgDFMA",
              "date": "13/3/2019 15:13"
            }
    ]
  
    this.userId = this.tickerData[0];
    this.initMessageLoop()
    this.messageLoop()
  }

  initMessageLoop(){
    for(let i=0; i < this.tickerCounter; i++){
      this.tickerShowing.unshift(this.tickerData[i])
    }
  }

  addMessage(message){
    if(message.value != ''){

      var d = new Date();
      var datesTicker = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " +
      d.getHours() + ":" + d.getMinutes();

      this.tickerData.push(      {
          "id": this.tickerData.length + 1,
          "name": "orel israeli",
          "text": message.value,
          "image": "data:image/jpeg;base64,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",
          "date": datesTicker
        })
      message.value = '';
    }
  }

  messageLoop(){
    setInterval(()=>{
        if (this.tickerData.length <= this.tickerCounter ) this.tickerCounter = 0;
        this.last = this.tickerShowing.length;
        for( let i=0; i <= this.tickerData.length; i++){
        if(this.tickerCounter == i){
          this.tickerShowing.unshift(this.tickerData[i])
        }
      }
        this.tickerCounter++;
        this.tickerShowing.splice(this.last, 1);
      },3000)
  }
}