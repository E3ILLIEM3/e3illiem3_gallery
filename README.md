## ตัวอย่างการใช้งาน
### e3illiem3 - Gallery คือ ?

> เป็น **Library** สำหรับ **Preview** รูปภาพ โดยจัดหมวดหมู่ให้เป็น **Gallery.**

### พัฒนาด้วย !

> * **bootstrap v5**
> * **Jquery v3.6.1**
> * **JavaScript**
> * **CSS**

### วิธีเรียกใช้งาน
**สามารถดูตัวอย่างจากไฟล์  [example.html](https://github.com/E3ILLIEM3/e3illiem3_gallery/blob/main/example.html)**

```html

<!--เรียกใช้ css-->
<link rel="stylesheet" href="/_for_css/e3illiem3_gallery.css">

<!--เรียกใช้ javascript *ควรวางไว้ใต้ Jquery -->
<script src="/_for_js/e3illiem3_gallery.js"></script>
```

### วิธีใช้งาน
```html
<div data-gallery="gallery1" pic-path="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" onclick="gallery.data_rooms(this)">
   
    <img id="img-normal" src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
         alt="">
    
</div>
```
> #### อธิบายการใช้งาน
> *ครอบ* tag img ด้วย **div** โดยมี **Attribute** ดังนี้.
> * **data-gallery :** ใช้สำหรับตั้งกลุ่ม ถ้าตั้งเหมือนกันจะถูกรวมกลุ่มอัตโนมัติ
> * **pic-path :** link รูปภาพ *จำเป็นต้องเหมือน **src** ใน tag **img**

> #### รูปตัวอย่าง
> [<img src="https://sv1.picz.in.th/images/2022/10/31/vQxigR.th.png">](https://sv1.picz.in.th/images/2022/10/31/vQxigR.png)
> [<img src="https://sv1.picz.in.th/images/2022/10/31/vQxRC0.th.png">](https://sv1.picz.in.th/images/2022/10/31/vQxRC0.png)
> [<img src="https://sv1.picz.in.th/images/2022/10/31/vQxg78.th.png">](https://sv1.picz.in.th/images/2022/10/31/vQxg78.png)

