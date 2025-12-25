# 📝 Hướng Dẫn Cập Nhật Portfolio

## 📋 Mục Lục
- [Cập Nhật Ảnh Đại Diện (Avatar)](#cập-nhật-ảnh-đại-diện-avatar)
- [Cập Nhật Link CV](#cập-nhật-link-cv)
- [Cập Nhật Hình Ảnh Dự Án](#cập-nhật-hình-ảnh-dự-án)
- [Cập Nhật Thông Tin Cá Nhân](#cập-nhật-thông-tin-cá-nhân)
- [Cấu Trúc Thư Mục](#cấu-trúc-thư-mục)

---

## 📸 Cập Nhật Ảnh Đại Diện (Avatar)

### Bước 1: Thêm ảnh vào thư mục
1. Đặt ảnh của bạn vào thư mục: `Portfolio/public/images/profile/`
2. Đặt tên file, ví dụ: `avatar.jpg` hoặc `profile.png`

### Bước 2: Cập nhật trong code
Mở file: **`Portfolio/src/app/data/profile.ts`**

```typescript
export const profileConfig = {
  // Thay đổi đường dẫn ảnh ở đây
  avatar: '/images/profile/avatar.jpg',  // ← THAY ĐỔI TẠI ĐÂY
  
  name: 'Your Name',
  // ... các thông tin khác
}
```

**Lưu ý:** 
- Đường dẫn bắt đầu từ `/images/` (không cần thêm `public/`)
- Hỗ trợ các định dạng: `.jpg`, `.jpeg`, `.png`, `.webp`

---

## 📄 Cập Nhật Link CV

### Cách 1: Upload CV vào project (Khuyên dùng)

#### Bước 1: Thêm file CV
1. Đặt file CV vào thư mục: `Portfolio/public/files/`
2. Đặt tên file, ví dụ: `CV_YourName.pdf`

#### Bước 2: Cập nhật trong code
Mở file: **`Portfolio/src/app/data/profile.ts`**

```typescript
export const profileConfig = {
  // ...
  
  // Thay đổi đường dẫn CV ở đây
  cvLink: '/files/CV_YourName.pdf',  // ← THAY ĐỔI TẠI ĐÂY
  
  // ...
}
```

### Cách 2: Dùng link Google Drive hoặc Dropbox

```typescript
export const profileConfig = {
  // Dùng link trực tiếp
  cvLink: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',  // Google Drive
  // hoặc
  cvLink: 'https://www.dropbox.com/s/YOUR_FILE_ID/CV.pdf',  // Dropbox
}
```

---

## 🖼️ Cập Nhật Hình Ảnh Dự Án

### Bước 1: Thêm hình ảnh vào thư mục
1. Đặt các hình ảnh dự án vào: `Portfolio/public/images/projects/`
2. Đặt tên file rõ ràng, ví dụ:
   - `netsphere.jpg` (ảnh chính)
   - `netsphere-1.jpg`, `netsphere-2.jpg` (screenshots)

### Bước 2: Cập nhật trong code
Mở file: **`Portfolio/src/app/data/projects.ts`**

```typescript
export const projects: Project[] = [
  {
    id: 1,
    name: "NETSPHERE",
    // ... các thông tin khác
    
    // ← THAY ĐỔI TẠI ĐÂY
    image: '/images/projects/netsphere.jpg',  // Ảnh chính của dự án
    
    // Thêm nhiều ảnh (tùy chọn)
    screenshots: [
      '/images/projects/netsphere-1.jpg',
      '/images/projects/netsphere-2.jpg',
      '/images/projects/netsphere-3.jpg'
    ]
  },
  // ... các dự án khác
]
```

### Ví dụ chi tiết:

```typescript
{
  id: 1,
  name: "NETSPHERE",
  tagline: "Full-Stack Social Networking Platform",
  description: "A comprehensive social networking platform...",
  category: "Full-Stack",
  tags: ["React", "Node.js", "MongoDB"],
  metrics: ["97 APIs", "99% Uptime"],
  featured: true,
  duration: "12 months",
  role: "Full-Stack Developer",
  team: "Solo",
  status: "Deployed & Live",
  
  // ← CẬP NHẬT HÌNH ẢNH TẠI ĐÂY
  image: '/images/projects/netsphere.jpg',
  screenshots: [
    '/images/projects/netsphere-1.jpg',
    '/images/projects/netsphere-2.jpg',
    '/images/projects/netsphere-3.jpg'
  ]
}
```

**Tips:**
- Nếu không có ảnh, có thể bỏ qua hoặc để `image: undefined`
- Hình ảnh nên có kích thước khoảng 1200x800px để hiển thị đẹp
- Nén ảnh trước khi upload để web load nhanh hơn

---

## 👤 Cập Nhật Thông Tin Cá Nhân

Mở file: **`Portfolio/src/app/data/profile.ts`**

Đây là nơi tập trung TẤT CẢ thông tin cá nhân của bạn:

```typescript
export const profileConfig = {
  // ========================================
  // PROFILE AVATAR
  // ========================================
  avatar: '/images/profile/avatar.jpg',  // ← Ảnh đại diện

  // ========================================
  // THÔNG TIN CƠ BẢN
  // ========================================
  name: 'Your Name',  // ← Tên của bạn
  title: 'Full-Stack Developer',  // ← Chức danh
  location: 'Vietnam',  // ← Địa điểm
  
  // Mô tả ngắn về bản thân
  bio: 'Passionate developer with expertise...',  // ← Bio
  
  // ========================================
  // CV/RESUME LINK
  // ========================================
  cvLink: '/files/CV.pdf',  // ← Link CV
  
  // ========================================
  // THÔNG TIN LIÊN HỆ
  // ========================================
  email: 'your.email@example.com',  // ← Email
  phone: '+84 xxx xxx xxx',  // ← Số điện thoại
  
  // ========================================
  // SOCIAL LINKS
  // ========================================
  social: {
    github: 'https://github.com/yourusername',  // ← GitHub
    linkedin: 'https://linkedin.com/in/yourusername',  // ← LinkedIn
    twitter: 'https://twitter.com/yourusername',  // ← Twitter
    facebook: 'https://facebook.com/yourusername',  // ← Facebook
    instagram: 'https://instagram.com/yourusername',  // ← Instagram
  },
  
  // ========================================
  // ROLES (văn bản xoay vòng trên homepage)
  // ========================================
  roles: [
    'Full-Stack Developer',  // ← Các vai trò của bạn
    'Mobile Specialist',
    'Cloud Enthusiast',
    'Problem Solver'
  ],
  
  // ========================================
  // TECH STACK (hiển thị trên homepage)
  // ========================================
  techStack: [
    'React',  // ← Các công nghệ bạn sử dụng
    'Node.js',
    'TypeScript',
    'MongoDB',
    'React Native',
    'Docker',
    'AWS',
    'PostgreSQL'
  ],
};
```

---

## 📁 Cấu Trúc Thư Mục

Sau khi làm theo hướng dẫn, cấu trúc thư mục sẽ như sau:

```
Portfolio/
├── public/
│   ├── images/
│   │   ├── profile/          ← ẢNH ĐẠI DIỆN TẠI ĐÂY
│   │   │   └── avatar.jpg    (Ảnh của bạn)
│   │   │
│   │   └── projects/         ← HÌNH ẢNH DỰ ÁN TẠI ĐÂY
│   │       ├── netsphere.jpg
│   │       ├── netsphere-1.jpg
│   │       ├── netsphere-2.jpg
│   │       ├── yoga-apps.jpg
│   │       ├── villa-booking.jpg
│   │       └── ... (các hình ảnh dự án khác)
│   │
│   └── files/                ← FILE CV TẠI ĐÂY
│       └── CV_YourName.pdf   (CV của bạn)
│
└── src/
    └── app/
        └── data/
            ├── profile.ts    ← CẬP NHẬT THÔNG TIN CÁ NHÂN
            └── projects.ts   ← CẬP NHẬT THÔNG TIN DỰ ÁN
```

---

## ✅ Checklist

- [ ] Đã thêm ảnh đại diện vào `public/images/profile/`
- [ ] Đã cập nhật đường dẫn avatar trong `src/app/data/profile.ts`
- [ ] Đã thêm file CV vào `public/files/`
- [ ] Đã cập nhật link CV trong `src/app/data/profile.ts`
- [ ] Đã thêm hình ảnh dự án vào `public/images/projects/`
- [ ] Đã cập nhật đường dẫn hình ảnh trong `src/app/data/projects.ts`
- [ ] Đã cập nhật thông tin cá nhân (tên, email, social links)
- [ ] Đã test lại website bằng `npm run dev`

---

## 🚀 Chạy Website

Sau khi cập nhật xong, chạy lệnh để xem kết quả:

```bash
cd Portfolio
npm run dev
```

Website sẽ chạy tại: `http://localhost:5173`

---

## 💡 Tips

1. **Kích thước ảnh khuyên dùng:**
   - Avatar: 400x400px (vuông)
   - Project images: 1200x800px (landscape)
   - Screenshots: 1920x1080px

2. **Định dạng file:**
   - Ảnh: `.jpg`, `.jpeg`, `.png`, `.webp`
   - CV: `.pdf` (khuyên dùng)

3. **Tối ưu hóa:**
   - Nén ảnh trước khi upload (dùng TinyPNG, ImageOptim)
   - File CV không nên quá 2MB

4. **Đặt tên file:**
   - Dùng lowercase và dấu gạch ngang
   - Ví dụ: `my-project.jpg`, `cv-nguyen-van-a.pdf`

---

## ❓ Câu Hỏi Thường Gặp

**Q: Tôi có thể dùng ảnh từ URL bên ngoài không?**
A: Có, bạn có thể dùng link trực tiếp: `image: 'https://example.com/image.jpg'`

**Q: Làm sao để xóa một dự án?**
A: Mở `projects.ts` và xóa object dự án tương ứng trong mảng `projects`.

**Q: Tôi muốn thay đổi thứ tự hiển thị dự án?**
A: Thay đổi thứ tự các object trong mảng `projects` trong file `projects.ts`.

**Q: File ảnh của tôi quá lớn, làm sao?**
A: Sử dụng công cụ nén ảnh online như TinyPNG hoặc ImageOptim.

---

## 📞 Support

Nếu gặp vấn đề, hãy kiểm tra:
1. Đường dẫn file có đúng không?
2. File có tồn tại trong thư mục `public/` không?
3. Console trong browser có báo lỗi gì không? (F12)

Good luck! 🎉
