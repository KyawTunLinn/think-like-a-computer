# Chapter 1: Classes & Objects

OOP မှာ အဓိက အကျဆုံးက Class နန့် Object ပါ။  အေသဘောတရားနှစ်ခုက ကျွန်တော်ရို့ နိန့်စဉ်ဘဝမှာ မြင်နီတွိ့နီရေ အရာတိနန့် တူပါရေ။

## Class vs Object နားလည်လွယ်မယ့် ဥပမာများ

### ၁။ မုန့်ပေါင်း ဥပမာ
- **Class**: မုန့်လုပ်ဖို့ ပုံစံခွက် (Mold or Cutter)။ ယင့်စာကို စားလို့မရပါ၊ မုန့်ပုံစံထွက်ဖို့ရာ လုပ်ထားရေ ပုံစံခွက်ရာ ဖြစ်ပါရေ။
- **Object**: အေ ပုံစံခွက်က ထွက်လာရေ မုန့်တိ (မုန့်ပေါင်း)။ မုန့်ကို ကိုင်လို့ရရေ၊ စားလို့ရရေ အရာဝတ္ထုတိ ဖြစ်ပါရေ။
> *ပုံစံခွက်တစ်ခုတည်းကနေ မုန့်အများကြီး ထုတ်လို့ရပိုင်၊ Class တစ်ခုတည်းကနိန် Object အများကြီး ဆောက်လို့ရပါရေ။*

### ၂။ အိမ်ဆောက်ပလန် (House Blueprint) ဥပမာ
- **Class**: အိမ်ပုံစံ ဒီဇိုင်း (Blueprint)။ စက္ကူမှာ ဆွဲထားရေ ပုံရာ ဖြစ်ပါရေ။ နီလို့မရပါ။
- **Object**: အမှန်ဆောက်လိုက်လို့ ပေါ်လာရေ အိမ် (House)။ လူနီလို့ရပါရေ။

---

## Attributes & Methods
အရာဝတ္ထုတိုင်းမှာ (၂) ပိုင်း ဟိတတ်ပါရေ။
1. **Attributes (Properties)**: သူမွာ ဇာတိဟိလဲ? (What it has)
2. **Methods (Actions/Behaviors)**: သူဇာတိလုပ်နိုင်လဲ? (What it does)

### လက်တွိ့ဥပမာ - မိုဘိုင်းဖုန်း (Mobile Phone)
ကျွန်တော်တို့ ကိုင်နီရေ ဖုန်းကို Class တစ်ခုအဖြစ် မြင်ကြည့်ရအောင်။

**Attributes (သူ့မှာဟိရေ အချက်အလက်တိ)**
- Brand (ဥပမာ - Apple, Samsung)
- Color (အမဲ၊ အဖြူ)
- Battery Level (30%, 80%)

**Methods (သူလုပ်ပီးနိုင်ရေ အလုပ်တိ)**
- Phone Call (ဖုန်းခေါ်ခြင်း)
- Take Photo (ဓာတ်ပုံရိုက်ခြင်း)
- Charge (အားသွင်းခြင်း)

### Pseudo Code နန့် ရွီးကြည့်ခြင်း

```pseudo
Class MobilePhone
    // Attributes
    Attribute brand = "Samsung"
    Attribute color = "Black"
    Attribute batteryLevel = 50
    
    // Methods
    Method makeCall(number)
        PRINT "Calling " + number + "..."
    End Method
    
    Method takePhoto()
        PRINT "Click! Photo taken."
    End Method
    
    Method charge()
        batteryLevel = batteryLevel + 10
        PRINT "Charging... Battery is now " + batteryLevel + "%"
    End Method
End Class
```

### အနှစ်ချုပ်
- **Class** ဆိုစွာ အရာဝတ္ထုတိကို ဖန်တီးဖို့ ပုံစံခွက် သို့မဟုတ် ဒီဇိုင်း (Design/Blueprint) ပါ။
- **Object** ဆိုစွာ အေ Class ကိုသုံးပနာ အဂယောင့်ဖန်တီးထားရေ အရာ (Real instance) ပါ။


---

## သင်ခန်းစာ အကျဉ်းချုပ်
- **Class**: အရာဝတ္ထုတိ ဖန်တီးဖို့ ပုံစံခွက် (Blueprint)။
- **Object**: ပုံစံခွက်ကနေ တကယ်ထွက်လာရေ အရာ (Instance)။
- **Attributes**: သူ့မှာဟိရေ အချက်အလက်တိ (Properties)။
- **Methods**: သူလုပ်နိုင်ရေ အလုပ်တိ (Actions)။

## လေ့ကျင့်ခန်း (Exercises)
1. **Design a Student**: `Student` ဟု အမည်ရရေ Class တစ်ခုကို Pseudo Code ဖြင့် ရေးကြည့်ပါ။
    - **Attributes**: `name`, `age`, `grade`
    - **Methods**: `study()`, `takeExam()`
2. **Object Creation**: အထက်ပါ `Student` Class ကိုသုံးပြီး သင့်ကိုယ်ပိုင် Object (Instance) တစ်ခု တည်ဆောက်ပြပါ။


[Next: Inheritance & Polymorphism >](chapter_2_inheritance_polymorphism.md)

[Back to Main Menu >](../README.md)
