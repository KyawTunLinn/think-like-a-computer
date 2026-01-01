[← Back to System Design Index](system_design.md)

# Chapter 1: Design an ATM System (ငွေထုတ်စက် ဒီဇိုင်းဆွဲခြင်း)

အေ သင်ခန်းစာမှာ ကျွန်တော်ရို့ သင်ထားရေ **OOP Concept** တိကို အသုံးချပနာ ATM စနစ်တစ်ခုကို ဇာပိုင် တည်ဆောက်ဖို့လဲဆိုစွာ လေ့လာကတ်ပါဖို့။

---

## ၁။ လိုအပ်ချက်တိ (Requirements)
*   User က Credit Card ထည့်နိုင်ရပါဖို့။
*   PIN နံပါတ် မှန်မှ အလုပ်လုပ်ရပါဖို့။
*   ငွေထုတ်ဖို့ဆိုကေ လက်ကျန်ငွေ (Balance) လောက်မှ ထုတ်ပီးရပါဖို့။

## ၂။ Class ခွဲခြားခြင်း (Designing Classes)
အဓိက ပါဝင်ဖို့ အရာဝတ္ထုတိကို Class ခွဲကြည့်ကတ်ပါဖို့။

1.  **ATM**: စက်ကြီးတစ်ခုလုံးကို ကိုယ်စားပြုပါရေ။
2.  **BankAccount**: User တစ်ယောက်ချင်းစီဧ့ ဘဏ်အကောင့်ပါ။
3.  **Card**: အကောင့်ထဲကို ဝင်ဖို့သော့ပါ။

## ၃။ လုပ်ဆောင်ပုံ အဆင့်ဆင့် (Logic Flow)

1.  **Insert Card**: Card ကို ဖတ်မေ။
2.  **Validate PIN**: PIN မှန်/မမှန် စစ်မေ။
3.  **Check Balance**: ထုတ်ချင်ရေ ပမာဏက Balance ထက် နည်းလား/များလား စစ်မေ။
4.  **Dispense Cash**: ဖေ့ချာထုတ်ပီးမေ၊ Balance ကို လျှော့မေ။

## ၄။ Pseudocode Implementation

```text
CLASS BankAccount
    ATTRIBUTE balance = 1000
    ATTRIBUTE pin_code = 1234
    
    METHOD verifyPIN(input_pin)
        IF input_pin == pin_code THEN
            RETURN True
        ELSE
            RETURN False
        END IF
    END METHOD

    METHOD withdraw(amount)
        IF amount > balance THEN
            PRINT "Error: ဖေ့ချာမလောက်ပါ"
        ELSE
            balance = balance - amount
            PRINT "Successful! ကျန်ငွေ: " + balance
        END IF
    END METHOD
END CLASS

CLASS ATM
    METHOD start()
        PRINT "ကတ်ထည့်ပါ..."
        input_pin = GET_USER_INPUT("PIN ရိုက်ပါ")
        
        IF account.verifyPIN(input_pin) == True THEN
            amount = GET_USER_INPUT("ဖေ့ချာပမာဏ ရိုက်ပါ")
            account.withdraw(amount)
        ELSE
            PRINT "PIN မှားယွင်းနီပါရေ"
        END IF
    END METHOD
END CLASS
```

---

## သင်ခန်းစာ အကျဉ်းချုပ်
- **OOP Application**: Class တိ (ATM, BankAccount) ခွဲခြားပြီး တည်ဆောက်ခြင်း။
- **Encapsulation**: PIN နန့် Balance ကို အပြင်ကနီ တိုင်းမပြင်နိုင်အောင် Method တိနန့် ထိန်းချုပ်ခြင်း။

## လေ့ကျင့်ခန်း (Exercises)
1.  **Deposit Feature**: အကယ်လို့ ATM မှာ ငွေပြန်သွင်းလို့ရရေ (Deposit) စနစ် ပါလာဖို့ဆိုကေ ဇာ Class မှာ `deposit()` method ကို ထည့်သင့်လဲ? (`ATM` လား `BankAccount` လား? ဇာဖြစ်လို့လဲ?)
2.  **Card Limit**: တစ်နိကို အများဆုံး ၅ သိန်းရာ ထုတ်လို့ရဖို့ဆိုရေ စည်းကမ်း (Limit) သတ်မှတ်ချင်ကေ Logic ကို ဇာနားမှာ ပြင်ရွီးဖို့လဲ?

[Next: Design a Library >](chapter_2_library.md)

[Back to Main Menu >](../README.md)
