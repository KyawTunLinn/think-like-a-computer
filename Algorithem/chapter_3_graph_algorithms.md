[← Back to Algorithms Index](algorithms.md)

# Chapter 3: Graph Algorithms (ကွန်ရက် ရှာဖွေခြင်း Algorithms)

Algorithm လောကမှာ အရေးအကြီးဆုံးဖြစ်ရေ Graph (ကွန်ရက်) တိကို ဇာပိုင် ရှာဖွေမလဲ၊ အတိုဆုံးလမ်းကြောင်း ဇာပိုင်ရှာမလဲ ဆိုစွာကို လေ့လာကတ်ပါဖို့။

---

## 1. Breadth-First Search (BFS - ရေပြင်ညီ ရှာဖွေခြင်း)

![BFS vs DFS Visual](illustration/bfs_dfs.png)

**ယင်းက ဇာလဲ?**
နီရာတစ်ခုကနီ စပြီး ကိုယ်နန့် အနီးဆုံးနီရာတိကို အရင်လိုက်ရှာရေ နည်းလမ်းပါ။

**လက်တွိ့ဘဝ ဥပမာ -**
ရေကန်ထဲ ကျောက်ခဲပစ်ချလိုက်ကေ ဂယက်ဝိုင်းလေးတိက အလယ်ကနီ ဘေးကို တဖြည်းဖြည်း ပြန့်သွားသပိုင်မျိုးပါ။ ကိုယ်နန့် အနီးဆုံး သူငယ်ချင်းတိကို အရင်ရှာ၊ ပြီးမှ သူတို့ရဲ့ သူငယ်ချင်းတိကို ဆက်ရှာစွာမျိုး (Facebook Friends) ပေါ့။

**Pseudocode:**
```text
START
  Queue.Enqueue(StartNode)
  Mark StartNode as Visited
  WHILE Queue is NOT Empty
    Node = Queue.Dequeue()
    Process(Node)
    FOR EACH Neighbor of Node
      IF Neighbor is NOT Visited THEN
        Mark Neighbor as Visited
        Queue.Enqueue(Neighbor)
      END IF
    END FOR
  END WHILE
END
```

---

## 2. Depth-First Search (DFS - ဒေါင်လိုက် ရှာဖွေခြင်း)

**ယင်းက ဇာလဲ?**
လမ်းတစ်ခုကို ရွေးပြီးကေ အဲဒီလမ်းအတိုင်း မဆုံးမချင်း (သို့) လမ်းပိတ်ရေအထိ လျှောက်သွားပြီးမှ နောက်ပြန်လှည့်ရေ နည်းလမ်းပါ။

**လက်တွိ့ဘဝ ဥပမာ -**
ဝင်္ကပါ (Maze) ထဲက ထွက်ပေါက်ရှာသပိုင်ပါရာ။ လမ်းတစ်ခုတွိ့ကေ ဝင်သွားမေ။ လမ်းပိတ်နီကေ ပြန်လှည့်လာပြီး နောက်လမ်းတစ်ခုကို ဆက်စမ်းမေ။

**Pseudocode:**
```text
FUNCTION DFS(Node)
  Mark Node as Visited
  Process(Node)
  FOR EACH Neighbor of Node
    IF Neighbor is NOT Visited THEN
      DFS(Neighbor)
    END IF
  END FOR
END FUNCTION
```

---

## 3. Dijkstra's Algorithm (အတိုဆုံးလမ်းကြောင်း ရှာဖွေခြင်း)

![Dijkstra Visual](illustration/dijkstra.png)

**ယင်းက ဇာလဲ?**
နီရာနှစ်ခုကြား သွားလို့ရရေ လမ်းတိအများကြီးထဲကနီ အချိန်အနည်းဆုံး၊ ဒါမှမဟုတ် ခရီးအနီးဆုံး လမ်းကို တွက်ချက်ပေးစွာပါ။

**လက်တွိ့ဘဝ ဥပမာ -**
**Google Maps** ပါရာ။ အိမ်ကနီ ရုံးကိုသွားဖို့ လမ်းတိအများကြီးရှိပေမယ့်၊ ဒီ Algorithm က ကားပိတ်ရေလမ်း၊ ဝေးရေလမ်းတိကို ရှောင်ပြီး အမြန်ဆုံးရောက်မယ့် လမ်းကြောင်းကို တွက်ပေးစွာဖြစ်ပါရေ။

**Pseudocode:**
```text
START
  Init Distances to Infinity, StartNode to 0
  PriorityQueue.Add(StartNode, 0)
  WHILE PriorityQueue is NOT Empty
    CurrentNode = PriorityQueue.PopMin()
    FOR EACH Neighbor of CurrentNode
      NewDist = Distances[CurrentNode] + EdgeWeight
      IF NewDist < Distances[Neighbor] THEN
        Distances[Neighbor] = NewDist
        PriorityQueue.Update(Neighbor, NewDist)
      END IF
    END FOR
  END WHILE
END
```


---

## သင်ခန်းစာ အကျဉ်းချုပ်
- **BFS**: ရေပြင်ညီ ရှာဖွေခြင်း (အနီးဆုံးအရင်)။
- **DFS**: ဒေါင်လိုက် ရှာဖွေခြင်း (အဆုံးထိသွားပြီးမှ ပြန်လှည့်)။
- **Dijkstra**: အတိုဆုံး လမ်းကြောင်း ရှာဖွေခြင်း။

## လေ့ကျင့်ခန်း (Exercises)
1. **Shortest Path**: ရန်ကုန်မှ မန္တလေးသို့ ခရီးစရိတ် အနည်းဆုံး (သို့) အချိန်အနည်းဆုံးဖြင့် သွားလိုသည်။ Google Maps ကဲ့သို့သော စနစ်များသည် မည်သည့် Graph Algorithm ကို အသုံးပြုမည်ဟု ထင်ပါသနည်း?
2. **Maze Solver**: ဝင်္ကပါထဲမှ ထွက်ပေါက်ရှာရာတွင် လမ်းဆုံးသည်အထိ လျှောက်သွားပြီးမှ ပြန်လှည့်လာခြင်းသည် *BFS* လား၊ *DFS* လား?


[Back to Main Menu >](../menu.md)
