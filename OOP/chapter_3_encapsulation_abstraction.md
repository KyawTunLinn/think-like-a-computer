# Chapter 3: Encapsulation & Abstraction

ဒေအခန်းမှာတော့ OOP ဧ့ လုံခြုံရီးနန့် ရှုပ်ထွေးမှု လျှော့ချရေ အပိုင်းတိကို လေ့လာလားပါဖို့။ အေသဘောတရားနှစ်ခုက ခွဲခြားရခက်ကေလည်း အလုပ်လုပ်ပုံ မတူပါ (Data Hiding vs Implementation Hiding)။

## 1. Encapsulation (လုံခြုံစွာ ထုပ်ပိုးခြင်း)
Data တိကို အပြင်လူ (External Access) ကနေ တိုက်ရိုက် ဝင်ပြင်လို့မရအောင် ကာကွယ်ထားခြင်း ဖြစ်ပါရေ။

### လက်တွိ့ဥပမာ - ATM စက်
ATM စက်ထဲမှာ ဖေ့ချာတိ (Data) အများကြီးဟိရေ။ ယေကေလည်း ကျွန်တော်ရို့က အေဖေ့ချာတိကို လက်နန့် တိုက်ရိုက် နှိုက်ယူလို့ မရပါ။
- **Private Data**: ဖေ့ချာတိတ္တာ (Money Vault)။
- **Public Access**: ကဒ်ထည့်၊ PIN ရိုက်ပြီးမှ ဖေ့ချာထုတ်ယူလို့ရရေ စနစ်။

> *Encapsulation က Data ကို ကာကွယ်ဖို့ (Protect) လုပ်ဆောင်ပါရေ။*

### Pseudo Code
`balance` (လက်ကျန်ဖေ့ချာ) ကို အပြင်ကနေ တိုက်ရိုက် `0` လို့ ပြင်ပစ်လို့မရအောင် `PRIVATE` နန့် ကာကွယ်ထားပါရေ။

```pseudo
Class BankAccount
    // PRIVATE ဆိုစွာ Class အပြင်ကနေ တိုက်ရိုက်ယူသုံးလို့မရပါ
    PRIVATE Attribute balance = 1000
    
    // ပိုက်ဆံထုတ်ချင်ရင် ဒီ Method ကတစ်ဆင့်ရာ ရပါမယ်
    Method withdraw(amount)
        IF amount > balance THEN
            PRINT "Error: ဖေ့ချာမလောက်ပါ"
        ELSE
            balance = balance - amount
            PRINT "ဖေ့ချာထုတ် အောင်မြင်: " + amount
        END IF
    End Method
End Class
```

---

## 2. Abstraction (မလိုအပ်စာကို ဖျောက်ထားခြင်း)
ရှုပ်ထွေးရေ အလုပ်လုပ်ပုံတိကို အနောက်မှာ ဖျောက်ထားပြီး (Hide Complexity)၊ အသုံးပြုသူအတွက် လွယ်ကူရေ ခလုတ် (Interface) ကိုရာ ပြသထားခြင်း ဖြစ်ပါရေ။

### လက်တွိ့ဥပမာ - ကော်ဖီစက် (Coffee Machine)
ကော်ဖီစက်မှာ ခလုတ်တစ်ခုရာ ဟိမယ် - "Make Coffee"။
- ကျွန်တော်တို့ ခလုတ်နှိပ်လိုက်ကေ ကော်ဖီရရေ။
- စက်ထဲမှာ *ရီပူဆူအောင်လုပ်စာ*၊ *ကော်ဖီစိ့ကြိတ်စာ*၊ *အရည်ဖျော်စာ* တိကို ကျွန်တော်ရို့ သိဖို့မလို၊ လုပ်ဖို့မလိုပါ။ စက်က အလိုအလျောက် လုပ်ပီးလားပါဖို့။

> *Abstraction က ရှုပ်ထွေးမှုကို လျှော့ချဖို့ (Simplify) လုပ်ဆောင်ပါရေ။*

### Pseudo Code

```pseudo
Class CoffeeMachine
    // အသုံးပြုသူက ဒါကိုရာ မြင်ရပါမယ်
    Method makeCoffee()
        PRINT "ကော်ဖီ ဖျော်နီပါရေ..."
        boilWater()   // အနောက်ကွယ်က အလုပ်
        brew()        // အနောက်ကွယ်က အလုပ်
        PRINT "ကော်ဖီရပါပြီ! ☕"
    End Method
    
    // PRIVATE Methods (အသုံးပြုသူ သိစရာမလိုပါ)
    PRIVATE Method boilWater()
        PRINT "ရေနွေးတည်နီသည်..."
    End Method
    
    PRIVATE Method brew()
        PRINT "ကော်ဖီစစ်နီသည်..."
    End Method
End Class
```

### Summary (အနှစ်ချုပ်)
| Concept | Focus | Example |
|---------|-------|---------|
| **Encapsulation** | **Data Security** (လုံခြုံရေး) | ATM (ပိုက်ဆံကို တိုက်ရိုက်ယူမရ) |
| **Abstraction** | **Simplicity** (ရိုးရှင်းမှု) | Coffee Machine (ခလုတ်နှိပ်ရုံဖြင့် ရ) |


---

## သင်ခန်းစာ အကျဉ်းချုပ်
- **Encapsulation**: အချက်အလက်တိကို လုံခြုံအောင် ကာကွယ်ထားခြင်း (Data Security)။
- **Abstraction**: ရှုပ်ထွီးရေ လုပ်ဆောင်ချက်တိကို ဖျောက်ထားပနာ ရိုးရှင်းစွာကိုရာ ပြသခြင်း (Simplicity)။

## လေ့ကျင့်ခန်း (Exercises)
1. **Secure Login**: `User` Class တစ်ခုတွင် `password` ကို အပြင်မှ တိုက်ရိုက် မပြောင်းလဲနိုင်အောင် (Encapsulation) ဇာပိုင် ကာကွယ်ဖို့လဲ? (`PRIVATE` keyword သုံးပြီး စိုင်းစားပါ)
2. **Car Dashboard**: ကားမောင်းသူရေ အင်ဂျင်အလုပ်လုပ်ပုံကို သိစရာမလိုဘဲ စတီယာရင်နှင့် ဘရိတ်ကိုယာ သုံးရရေ။ အေအခြီအနီရေ OOP ဧ့ ဇာ Concept နှင့် ကိုက်ညီလဲ? (*Abstraction* or *Inheritance*?)


[Next: Applied System Design >](../System%20Design/system_design.md)

[Back to Main Menu >](../README.md)
