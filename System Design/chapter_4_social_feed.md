

# Chapter 4: Design a Social News Feed (Facebook Feed Design)

အေ သင်ခန်းစာမှာ **Algorithms** (Sorting, Filtering) တိကို အသုံးချပနာ Facebook သို့မဟုတ် TikTok ပိုင် Feed တစ်ခု ဇာပိုင် အလုပ်လုပ်လဲ ဆိုစွာ ဒီဇိုင်းဆွဲကြည့်ကတ်ပါဖို့။

---

## ၁။ လိုအပ်ချက်တိ (Requirements)
*   User က App ကို ဖွင့်လိုက်ကေ သူ့သူငယ်ချင်းတိ တင်ထားရေ Post တိကို တွိရပါဖို့။
*   အသစ်တင်စာတိ အရင်ပေါ်ရပါဖို့ (သို့မဟုတ်) နာမည်ကြီးစာတိ အရင်ပေါ်ရပါဖို့။

## ၂။ Algorithm ရွီးချယ်ခြင်း

### အဆင့် ၁: Get Posts (အသူ့ Post တွေ ယူမလဲ?)
Friend List ထဲက လူတိ့ Post အကုန်လုံးကို Database ထဲက ဆွဲထုတ်လိုက်ပါဖို့။
`ALL_POSTS = [ Post A, Post B, Post C, ... ]`

### အဆင့် ၂: Filtering (မဆိုင်စာတိ ဖယ်ထုတ်ခြင်း)
အချို့ Post တိက ကိုယ်မမြင်ချင်ရေ စာတိ (ဥပမာ - ကြော်ငြာတိ၊ Block ထားရေလူတိ) ဖြစ်နိုင်ပါရေ။
```text
FOR EACH Post IN ALL_POSTS
    IF Post.Author is NOT Blocked THEN
        KEEP Post
    END IF
END FOR
```

### အဆင့် ၃: Sorting (စီခြင်း - အရေးကြီးဆုံးအပိုင်း)
ကျန်ခရေ Post တိကို ဇာစာက အထက်ဆုံးမှ ပြဖို့လဲ?

*   **Option A: Chronological Sort (အချိန်အလိုက်)**
    *   အသစ်ဆုံးစာ အထက်ဆုံးက ပြမေ။
    *   *Algorithm*: **Quick Sort** or **Merge Sort** based on `Timestamp`.
    
*   **Option B: Ranking Sort (စိတ်ဝင်စားမှုအလိုက်)**
    *   Like များစာ၊ Comment များစာ အထိပ်ဆုံးက ပြမေ။
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
- **Filtering**: မလိုချင်ရေ Data တိကို ဖယ်ထုတ်ခြင်း။
- **Ranking**: အရေးကြီးရေ Data ကို ထိပ်ဆုံးသို့ပို့ဖို့ Score တွက်ချက်ခြင်း။
- **Sorting**: တွက်ချက်ထားရေ Score အတိုင်း အစိုင်လိုက် စီခြင်း။

## လေ့ကျင့်ခန်း (Exercises)
1.  **Video Recommendation**: TikTok မှာဆိုကေ Friend မဟုတ်တေလူတိနန့် Video တိကိုပါ ပြပီးရေ။ ယင့်စာကိုပါ Algorithm ဇာပိုင် ရွီးဖို့လဲ? (Hint: User ကြိုက်တေ Category တူစာတိကို ရှာဖို့လား?)
2.  **Performance**: Post ပေါင်း ၁ သန်းလောက်ဟိကေ တစ်ခုချင်းတိုင်း လိုက်တွက်ဖို့ တဝကြာလားနိုင်ပါရေ။ ယင်အောင် ဇာပိုင်လုပ်ဖို့လဲ? (Hint: Algorithm အခန်းက Binary Search နန့်ဆိုင်ဖို့လား၊ Hash Map နန့်ဆိုင်မလား?)



 
