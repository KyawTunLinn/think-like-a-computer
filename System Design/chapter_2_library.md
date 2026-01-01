[← Back to System Design Index](system_design.md)

# Chapter 2: Design a Library Management System (စာကြည့်တိုက်စနစ်)

အေ သင်ခန်းစာမှာ **Data Structures** (Array, Stack, Queue, Hash Map) တိကို လက်တွေ့ ဇာနီရာမှာ ရွီးချယ်သုံးရမလဲ ဆိုစွာ လေ့လာကတ်ပါဖို့။

---

## ၁။ လိုအပ်ချက်များ (Requirements)
*   စာအုပ်နာမည် ရိုက်ရှာကေ ချက်ချင်း တွိရပါဖို့။
*   စာအုပ်ငှားချင်ရေလူတိကို အလှည့်ကျ စောင့်ခိုင်းရပါဖို့။
*   စာအုပ်ပြန်အပ်ကေ လှည်း (Cart) ပေါ် တင်ထားမေ၊ စာကြည့်တိုက်မှူးက နောက်ဆုံးအပ်စွာကို အရင်ယူပနာ စင်ပေါ်ပြန်တင်မေ။

## ၂။ Data Structure ရွီးချယ်ခြင်း

### ပြဿနာ ၁: စာအုပ်ရှာဖွေခြင်း (Searching)
စာအုပ်ပေါင်း ၁ သိန်းဟိရေ။ "Harry Potter" လို့ ရှာလိုက်စွာနန့် ဇာစင်မှာဟိလဲ ချက်ချင်း သိချင်ပါရေ။
*   Option A (Array): တစ်အုပ်ချင်းစီ လိုက်ရှာမေ (ကြာမေ)။
*   Option B (Hash Map): `Title` ကို Key လုပ်ပနာ `Location` ကို Value ထားမေ။ `Map["Harry Potter"]` ဆိုတာနန့် ချက်ချင်း အဖြေထွက်မေ။
*   **Decision**: **Hash Map** ကို သုံးသင့်ပါရေ။ (အမြန်ဆုံးမို့လို့ပါ)

### ပြဿနာ ၂: စာအုပ်ငှားရန် စောင့်ခြင်း (Waiting List)
စာအုပ်တစ်အုပ်တည်းကို လူ ၅ ယောက်လောက် လိုချင်နီကတ်ပါရေ။
*   စည်းကမ်း: အရင်လာရေလူ အရင်ရရဖို့ (First Come, First Served).
*   **Decision**: **Queue (FIFO)** ကို သုံးရပါဖို့။ လူ A လာကေ `Enqueue(A)`, လူ B လာကေ `Enqueue(B)`။ စာအုပ်အားတာနန့် `Dequeue()` လုပ်ပနာ A ကို ပီးလိုက်မေ။

### ပြဿနာ ၃: စာအုပ်ပြန်စီခြင်း (Restocking)
ပြန်အပ်ထားရေ စာအုပ်ပုံ (Return Pile) ကို လှည်းပေါ်တင်ထားရေ။
*   သဘောသဘာဝ: လှည်းပေါ်ကို နောက်ဆုံးမှ တင်လိုက်တေ စာအုပ်က အပေါ်ဆုံးမှာ ရောက်နီမေ။ ယူကေ အပေါ်ဆုံးက ဟာကိုရာ အရင်ယူလို့ရမေ။
*   **Decision**: **Stack (LIFO)** သဘောတရား ဖြစ်နီပါရေ။ နောက်ဆုံးအပ်တေစာအုပ် (Last In) ကို အရင်ယူပနာ (First Out) စင်ပေါ်တင်ရပါဖို့။

---

## ၃။ System Visualization

```text
[ Library System ]
      |
      |-- (1) Searching: Hash Map { "Title" : "Shelf A-1" }
      |
      |-- (2) Reservation: Queue [ User 1 -> User 2 -> User 3 ]
      |
      |-- (3) Returns: Stack [ Book C (Top) | Book B | Book A (Bottom) ]
```

---

## သင်ခန်းစာ အကျဉ်းချုပ်
- **Hash Map**: အမြန်ဆုံး ရှာဖွေဖို့ သုံးသည်။
- **Queue**: အလှည့်ကျ စနစ်များ (First-come-first-serve) အတွက် သုံးသည်။
- **Stack**: နောက်ဆုံးလုပ်တာ အရင်ပြန်ဖျက်/ပြန်ယူ (Last-in-first-out) အတွက် သုံးသည်။

## လေ့ကျင့်ခန်း (Exercises)
1.  **Undo Feature**: စာကြည့်တိုက်မှူးက စာအုပ်အချက်အလက်ကို ပြင်နီရင်း မှားဖျက်မိလားရေ။ "Undo" နှိပ်ပနာ အရင်အခြေအနေကို ပြန်လားချင်ကေ ဇာ Data Structure က အသင့်တော်ဆုံးလဲ? (Hint: Stack vs Queue)
2.  **Books by Author**: စာရေးဆရာ နာမည်တူ စာအုပ်တိကို စုထားချင်ရေ။ Array နန့် သိမ်းစွာ ကောင်းမလား၊ Linked List နန့် ချိတ်ထားစွာ ကောင်းမလား?

[Next: Traffic Light Controller >](chapter_3_traffic_light.md)

[Back to Main Menu >](../menu.md)
