# Chapter 2: Inheritance & Polymorphism

OOP ရဲ့ အားသာချက်ကတော့ ကုဒ်တိကို ထပ်ခါထပ်ခါ မရွီးရဘဲ ပြန်လို့အသုံးပြုနိုင်ခြင်း (Reusability) နန့် ပြောင်းလွယ်ပြင်လွယ်ဟိခြင်း (Flexibility) ဖြစ်ပါရေ။

## 1. Inheritance (မျိုးရိုးလိုက်ခြင်း)
မျိုးရိုးလိုက်ရေဆိုစွာ "အီးယို" ပါးက အရည်အချင်းတိကို "သားသမီး" က အမွီဆက်ခံရဟိခြင်း ဖြစ်ပါရေ။

### လက်တွိ့ဥပမာ - ဖုန်း (Phone)
ကျွန်တော်ရို့မှာ ရိုးရိုးဖုန်း (Keypad Phone) တစ်လုံးဟိရေ ဆိုပါဖိ။
- **Phone** (Parent): ဖုန်းခေါ်နိုင်ရေ၊ စာပို့နိုင်ရေ။

နောက်ထပ် စမတ်ဖုန်း (Smart Phone) တစ်လုံး ထပ်ထုတ်ရေ။
- **SmartPhone** (Child): ရိုးရိုးဖုန်းလုပ်နိုင်စွာတိ (ဖုန်းခေါ်၊ စာပို့) အကုန်လုပ်နိုင်ရေ။ ယင့်အပြင် အင်တာနက်သုံးစာ၊ ဂိမ်းကစပ်စာတိပါ ထပ်ဖြည့်စွက်နိုင်ရေ။
> *SmartPhone သည် Phone ဖြစ်ရေ (SmartPhone IS-A Phone)*. ကုဒ်ပြန်ရွီးစရာမလိုဘဲ Phone က လုပ်ဆောင်ချက်တိကို ယူသုံးလိုက်လို့ရပါရေ။

```pseudo
Class Phone
    Method call()
        PRINT "Calling..."
    End Method
    
    Method sendSMS()
        PRINT "Sending Message..."
    End Method
End Class

// SmartPhone သည် Phone ဆီက အကုန်အမွေရရေ
Class SmartPhone INHERITS FROM Phone
    Method surfInternet()
        PRINT "Browsing Website..."
    End Method
End Class
```

---

## 2. Polymorphism (ပုံစံအမျိုးမျိုး ဆောင်ခြင်း)
Polymorphism ဆိုစွာ "Poly" (အများ) နန့် "Morph" (ပုံစံ) က လာစွာပါ။ လုပ်ဆောင်ချက် (Method) နာမည် တူကေလည်း လုပ်ဆောင်ပုံ (Behavior) ကွဲပြားနိုင်စွာကို ဆိုလိုပါရေ။

### လက်တွေ့ဥပမာ - "Play" ခလုတ်
Remote Control က "Play" ခလုတ် တစ်ခုတည်း ဖြစ်ပေမယ့်၊ ဇာစက်နန့် တွဲသုံးလဲပေါ်မူတည်ပနာ အလုပ်လုပ်ပုံ ကွဲလားပါရေ။
- **Music Player** မှာ နှိပ်ကေ -> တေးခင်းသံ ထွက်လာဖို့။
- **Video Player** မှာ နှိပ်ကေ -> ဗီဒီယို ပြပီးဖို့။

### Pseudo Code

```pseudo
Class MusicPlayer
    Method play()
        PRINT "Playing Song 🎵"
    End Method
End Class

Class VideoPlayer
    Method play()
        PRINT "Playing Movie 🎬"
    End Method
End Class

// အသုံးပြုပုံ
player1 = NEW MusicPlayer()
player1.play() // Output: Playing Song 🎵

player2 = NEW VideoPlayer()
player2.play() // Output: Playing Movie 🎬
```


---

## သင်ခန်းစာ အကျဉ်းချုပ်
- **Inheritance**: မိဘ Class က အရည်အချင်းတိကို သားသမီး Class က ဆက်ခံရဟိခြင်း။ (ကုဒ်ကို ပြန်သုံးနိုင်ရေ)
- **Polymorphism**: လုပ်ဆောင်ချက် နာမည်တူကေလည်း အခြီအနိီပေါ်မူတည်ပနာ အလုပ်လုပ်ပုံ ကွဲပြားခြင်း။

## လေ့ကျင့်ခန်း (Exercises)
1. **Vehicle Inheritance**: `Vehicle` (ယာဉ်) ဟူသော Parent Class တစ်ခု ရှိပါဖိ။ `Car` နှင့် `Plane` ကို Child Classes အဖြစ် သတ်မှတ်ပါ။ `Car` တွင် `drive()` ရှိပြီး `Plane` တွင် `fly()` ရှိအောင် ဖန်တီးကြည့်ပါ။
2. **Shape Polymorphism**: `Shape` Class တွင် `draw()` method ရှိသည်။ `Circle` နှင့် `Square` ရို့ရေ `Shape` မှ ဆင်းသက်လာပြီး `draw()` ကို ခေါ်လိုက်လျှင် မတူညီရေ ပုံစံတိ (စက်ဝိုင်း၊ စတုရန်း) ဆွဲပြအောင် ဇာပိုင် စီစိုင်ဖို့လည်း?



 
