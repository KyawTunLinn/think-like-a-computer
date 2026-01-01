[← Back to System Design Index](system_design.md)

# Chapter 4: Design a Social News Feed (Facebook Feed Design)

အေ သင်ခန်းစာမှာ **Algorithms** (Sorting, Filtering) တွေကို အသုံးချပနာ Facebook သို့မဟုတ် TikTok လို Feed တစ်ခု ဇာပိုင် အလုပ်လုပ်သလဲ ဆိုစွာ ဒီဇိုင်းဆွဲကြည့်ကတ်ပါဖို့။

---

## ၁။ လိုအပ်ချက်များ (Requirements)
*   User က App ကို ဖွင့်လိုက်ကေ သူ့သူငယ်ချင်းတိ တင်ထားရေ Post တွေကို တွိရပါဖို့။
*   အသစ်တင်တာတိ အရင်ပေါ်ရပါဖို့ (သို့မဟုတ်) နာမည်ကြီးတာတိ အရင်ပေါ်ရပါဖို့။

## ၂။ Algorithm ရွီးချယ်ခြင်း

### အဆင့် ၁: Get Posts (အသူ့ Post တွေ ယူမလဲ?)
Friend List ထဲက လူတိရဲ့ Post အကုန်လုံးကို Database ထဲက ဆွဲထုတ်လိုက်ပါဖို့။
`ALL_POSTS = [ Post A, Post B, Post C, ... ]`

### အဆင့် ၂: Filtering (မဆိုင်တာတွေ ဖယ်ထုတ်ခြင်း)
အချို့ Post တွေက ကိုယ်မမြင်ချင်ရေ အရာတွေ (ဥပမာ - ကြော်ငြာတွေ၊ Block ထားရေလူတွေ) ဖြစ်နိုင်ပါရေ။
```text
FOR EACH Post IN ALL_POSTS
    IF Post.Author is NOT Blocked THEN
        KEEP Post
    END IF
END FOR
```

### အဆင့် ၃: Sorting (စီခြင်း - အရေးကြီးဆုံးအပိုင်း)
ကျန်ခရေ Post တွေကို ဇာဟာ အပေါ်ဆုံးက ပြမလဲ?

*   **Option A: Chronological Sort (အချိန်အလိုက်)**
    *   အသစ်ဆုံးဟာ အပေါ်ဆုံးက ပြမေ။
    *   *Algorithm*: **Quick Sort** or **Merge Sort** based on `Timestamp`.
    
*   **Option B: Ranking Sort (စိတ်ဝင်စားမှုအလိုက်)**
    *   Like များတာ၊ Comment များတာ အပေါ်ဆုံးက ပြမေ။
    *   *Score Calculation*: `Score = (Likes * 2) + (Comments * 5) + (Shares * 10)`
    *   Score အများဆုံးကို ထိပ်ဆုံးတင်မေ။

## ၃။ Pseudocode Implementation

```text
FUNCTION GenerateFeed(User)
    // 1. Get friends' posts
    RawPosts = User.GetFriendsPosts()
    
    // 2. Calculate Score for each post
    FOR EACH Post IN RawPosts
        Score = (Post.Likes * 1) + (Post.TimeRecency * 10)
        Post.Score = Score
    END FOR
    
    // 3. Sort by Score (High to Low)
    SortedFeed = QuickSort(RawPosts, key=Score, Order=DESCENDING)
    
    RETURN SortedFeed
END FUNCTION
```

---

## သင်ခန်းစာ အကျဉ်းချုပ်
- **Filtering**: မလိုချင်သော Data များကို ဖယ်ထုတ်ခြင်း။
- **Ranking**: အရေးကြီးသော Data ကို အပေါ်သို့ပို့ရန် Score တွက်ချက်ခြင်း။
- **Sorting**: တွက်ချက်ထားသော Score အတိုင်း အစဉ်လိုက် စီခြင်း။

## လေ့ကျင့်ခန်း (Exercises)
1.  **Video Recommendation**: TikTok မှာဆိုကေ Friend မဟုတ်တဲ့လူတိရဲ့ Video တွေကိုပါ ပြပီးရေ။ ဒါကိုရော Algorithm ဇာပိုင် ရွီးမလဲ? (Hint: User ကြိုက်တဲ့ Category တူတာတွေကို ရှာမလား?)
2.  **Performance**: Post ပေါင်း ၁ သန်းလောက်ဟိကေ ယောက်တိုင်းလိုက်တွက်ဖို့ အရမ်းကြာလားနိုင်ပါရေ။ ဒါကိုမြန်အောင် ဇာပိုင်လုပ်မလဲ? (Hint: Algorithm အခန်းက Binary Search နန့်ဆိုင်မလား၊ Hash Map နန့်ဆိုင်မလား?)

[Back to System Design Index >](system_design.md)

[Back to Main Menu >](../menu.md)
