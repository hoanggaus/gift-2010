export type RoleKey = 
  | 'mom' 
  | 'ba_huyen' 
  | 'co_hoa' 
  | 'di_khoa' 
  | 'sisters' 
  | 'other_relatives' 
  | 'lover' 
  | 'friend';

export interface RoleConfig {
  id: RoleKey;
  title: string;
  subtitle: string;
  icon: string;
  bgGradient: string;
}

export interface ContentData {
  intro: {
    greeting: string;
    question: string;
    passcodeHint: string;
    correctAnswer: string;
    image?: string; // Ảnh ở Màn 1
  };
  story: {
    title: string;
    image?: string; // Ảnh ở Màn 2
    messages: string[];
  };
  game: {
  title: string;
  description: string;
  boxes: { id: number; giftName: string; note: string; images?: string[]; label?: string }[]; // 👈 thêm label
};
  letter: {
    title: string;
    images?: string[]; // Danh sách ảnh ở Màn 4 (Thư)
    body: string[];
    closing: string;
  };
}

// 1. Danh sách 8 Lựa chọn ở Màn 0
export const ROLES: RoleConfig[] = [
  {
    id: 'mom',
    title: 'Mẹ Yêu Kính 🌸',
    subtitle: 'Người phụ nữ tuyệt vời nhất đời con',
    icon: '👑',
    bgGradient: 'from-pink-100 to-rose-200',
  },
  {
    id: 'ba_huyen',
    title: 'Bá Huyền Thân Thương 🌷',
    subtitle: 'Mẹ bạn thân - Tri kỷ ấm áp của mẹ con',
    icon: '💖',
    bgGradient: 'from-rose-100 to-pink-200',
  },
  {
    id: 'co_hoa',
    title: 'Cô Hoa Kính Yêu 📖',
    subtitle: 'Người cô, người mẹ thứ hai nâng bước tiềm năng',
    icon: '🌺',
    bgGradient: 'from-amber-100 to-orange-200',
  },
  {
    id: 'di_khoa',
    title: 'Dì Khoa Yêu Quý 💐',
    subtitle: 'Cô giáo cấp 2 & Người bạn thân thiết của mẹ',
    icon: '🍃',
    bgGradient: 'from-emerald-100 to-teal-200',
  },
  {
    id: 'sisters',
    title: 'Các Chị Thân Yêu ✨',
    subtitle: 'Những người chị luôn chiều chuộng, tâm sự',
    icon: '💅',
    bgGradient: 'from-purple-100 to-pink-200',
  },
  {
    id: 'other_relatives',
    title: 'Các Bá 🌾',
    subtitle: 'Những người phụ nữ thân thương trong họ hàng',
    icon: '🌻',
    bgGradient: 'from-yellow-100 to-amber-200',
  },
  {
    id: 'lover',
    title: 'Công Chúa Nhỏ 💖 (để cho có)',
    subtitle: '(con để cho có thôi) Dành riêng cho cô gái siêu đáng yêu',
    icon: '🥰',
    bgGradient: 'from-fuchsia-100 to-pink-200',
  },
  {
    id: 'friend',
    title: 'Cạ Cứng / Bạn Thân 🥂',
    subtitle: 'Cho đứa bạn siêu quậy nhưng luôn chất',
    icon: '🎉',
    bgGradient: 'from-sky-100 to-indigo-200',
  },
];

// 2. Nội dung chi tiết từng đối tượng
export const CONTENT_BY_ROLE: Record<RoleKey, ContentData> = {
  // === 1. MẸ (2 ẢNH MÀN CUỐI) ===
  mom: {
    intro: {
      greeting: "Con chào Mẹ yêu! 🌸",
      question: "Mẹ ơi, hôm nay 20/10 con có một bất ngờ nhỏ dành riêng cho Mẹ!",
      passcodeHint: "Bấm nút bên dưới để mở hộp quà yêu thương của con nhé!",
      correctAnswer: "Ngày của Mẹ",
    },
    story: {
      title: "Lời Từ Trái Tim Con",
      messages: [
        "Mẹ ơi, cảm ơn Mẹ vì luôn là hậu phương vững chắc và ấm áp nhất của con.",
        "Những bữa cơm dạt dào tình thương, những lời dặn dò ân cần...",
        "Con đi xa mới thấy không đâu bằng nhà, không ai thương con bằng Mẹ.",
        "Hôm nay 20/10, con chúc Mẹ luôn nhiều sức khỏe, tràn ngập niềm vui và bình an!",
      ],
    },
    game: {
      title: "Hộp Quà May Mắn Của Mẹ",
      description: "Mẹ chọn 1 trong 3 hộp quà bên dưới nhé!",
      boxes: [
        { id: 1, giftName: "Một chuyến du lịch thư giãn 🌴", note: "Con bao trọn gói luôn Mẹ nhé!" },
        { id: 2, giftName: "Liệu trình Spa chăm sóc sức khỏe 💆‍♀️", note: "Mẹ nhớ dành thời gian thư giãn nha" },
        { id: 3, giftName: "Bữa tối ấm áp con tự tay nấu 🍲", note: "Cuối tuần này con về chiêu đãi Mẹ!" },
      ],
    },
    letter: {
      title: "Bức Thư Gửi Mẹ Yêu",
      images: ["/images/mom_letter_1.jpg", "/images/mom_letter_2.jpg"],
      body: [
        "Mẹ kính yêu,",
        "Cảm ơn Mẹ đã luôn hy sinh và dành những điều tốt đẹp nhất cho con. Chúc Mẹ một ngày 20/10 thật rạng rỡ, ngập tràn tình yêu thương và nụ cười.",
        "Con yêu Mẹ rất nhiều!",
      ],
      closing: "Con yêu của Mẹ ❤️",
    },
  },

  // === 2. BÁ HUYỀN (1 ẢNH MÀN CUỐI) ===
  ba_huyen: {
    intro: {
      greeting: "Con chào Bá Huyền ạ! 🌷",
      question: "Hôm nay 20/10, con làm trang web nhỏ này gửi tặng Bá - người chị tri kỷ tuyệt vời của mẹ con!",
      passcodeHint: "Bấm vào để mở thiệp chúc mừng nhé Bá!",
      correctAnswer: "Bá Huyền",
    },
    story: {
      title: "Tình Tri Kỷ Ấm Áp",
      messages: [
        "Con cảm ơn Bá Huyền vì tình cảm ấm áp Bá luôn dành cho mẹ con và gia đình con suốt nhiều năm qua.",
        "Tuy không chung dòng máu, nhưng tình cảm giữa mẹ con và Bá gắn bó, thân thiết như người trong nhà.",
        "Nhìn mẹ và Bá thân thiết trò chuyện, chia sẻ niềm vui nỗi buồn, con cảm thấy vô cùng trân quý.",
        "Nhân ngày 20/10, con kính chúc Bá Huyền luôn dồi dào sức khỏe, lúc nào cũng tươi trẻ, bình an và hạnh phúc!",
      ],
    },
    game: {
      title: "Quẻ Mắn May Mắn 20/10",
      description: "Bá chọn thử một hộp quà may mắn nhé:",
      boxes: [
        { id: 1, giftName: "Chuyến du lịch vi vu cùng mẹ con 🌴", note: "Tình chị em mãi thắm thiết!" },
        { id: 2, giftName: "Nhan sắc rạng rỡ & Sức khỏe dồi dào 🌺", note: "Bá lúc nào cũng trẻ trung tươi tắn!" },
        { id: 3, giftName: "Bữa ăn sum họp hai gia đình 🍲", note: "Lại cùng nhau trò chuyện vui vẻ ạ!" },
      ],
    },
    letter: {
      title: "Gửi Bá Huyền Yêu Quý",
      images: ["/images/ba_huyen_letter.jpg", "/images/ba_huyen_letter_2.jpg"],
      body: [
        "Bá Huyền kính yêu,",
        "Cảm ơn Bá vì những tình cảm chân thành và sự gắn bó ấm áp Bá luôn dành cho mẹ con và gia đình.",
        "Nhân ngày Phụ nữ Việt Nam 20/10, con chúc Bá luôn tràn ngập niềm vui, sức khỏe dẻo dai và mãi là người phụ nữ tuyệt vời ạ!",
      ],
      closing: "Con của mẹ, cháu của Bá ❤️",
    },
  },

  // === 3. CÔ HOA (ẢNH MÀN ĐẦU & 2 ẢNH MÀN CUỐI) ===
  co_hoa: {
    intro: {
      greeting: "Em chào Cô Hoa ạ! 📖",
      question: "Một món quà nhỏ xuất phát từ lòng biết ơn gửi tới người cô, người mẹ thứ hai kính yêu của em!",
      passcodeHint: "Bấm vào đây để mở tấm thiệp tri ân Cô ạ!",
      correctAnswer: "Cô Hoa",
      image: "/images/co_hoa_intro.jpg",
    },
    story: {
      title: "Người Nâng Bước Tiềm Năng",
      messages: [
        "Em luôn cảm thấy vô cùng may mắn và tự hào khi trên chặng đường trưởng thành có sự đồng hành của Cô.",
        "Cô không chỉ truyền dạy kiến thức, mà còn là người luôn tin tưởng, khai phá tiềm năng và tài năng ẩn giấu trong em.",
        "Nhờ những lời khuyên sâu sắc và sự thấu hiểu của Cô, em/con mới vững tin thực hiện những ước định lớn của bản thân.",
        "Đối với em, Cô chính là người mẹ thứ hai đầy kính yêu. Chúc Cô 20/10 luôn tràn đầy nhiệt huyết và hạnh phúc!",
      ],
    },
    game: {
      title: "Món Quà Tri Ân",
      description: "Cô chọn một chiếc hộp may mắn nhé:",
      boxes: [
        { id: 1, giftName: "Lẵng hoa tươi tri ân rạng rỡ 💐", note: "Gửi trọn tình cảm tri ân tới Cô!" },
        { id: 2, giftName: "Sức khỏe dồi dào & An nhiên 🌿", note: "Chúc Cô luôn bình an trong tâm hồn" },
        { id: 3, giftName: "Ước nguyện thành công & Học trò ngoan 🎁", note: "Nguyện ước của Cô luôn thành hiện thực!" },
      ],
    },
    letter: {
      title: "Tri Ân Cô Hoa Kính Yêu",
      images: ["/images/co_hoa_letter_1.jpg", "/images/co_hoa_letter_2.jpg"],
      body: [
        "Cô Hoa kính yêu,",
        "Cảm ơn Cô vì đã luôn lắng nghe, tin tưởng và truyền động lực giúp em/con tự tin bước đi trên con đường của mình.",
        "Chúc Cô một ngày 20/10 thật trọn vẹn, luôn giữ vững ngọn lửa yêu thương và gặt hái thêm nhiều niềm vui trong cuộc sống!",
      ],
      closing: "Học trò luôn biết ơn Cô ❤️",
    },
  },

  // === 4. DÌ KHOA ===
  di_khoa: {
    intro: {
      greeting: "Con chào Dì Khoa ạ! 🍃",
      question: "Món quà 20/10 đặc biệt dành tặng Dì - người cô giáo cấp 2 đáng kính và người bạn thân thiết của mẹ!",
      passcodeHint: "Bấm vào đây để xem món quà con làm tặng Dì nhé!",
      correctAnswer: "Dì Khoa",
    },
    story: {
      title: "Kỷ Niệm Thân Thương",
      messages: [
        "Con luôn nhớ về những ngày tháng cấp 2 được Dì Khoa tận tình dạy dỗ và chỉ bảo.",
        "Dì không chỉ là cô giáo kính yêu thời đi học mà còn là người bạn thân thiết gắn bó cùng mẹ con từ thời xưa.",
        "Sự ấm áp, hóm hỉnh và tâm lý của Dì luôn là những kỷ niệm vô cùng đẹp đẽ trong lòng con.",
        "Nhân ngày Phụ nữ Việt Nam 20/10, con chúc Dì Khoa luôn tươi trẻ, tràn đầy năng lượng và luôn gặp nhiều may mắn!",
      ],
    },
    game: {
      title: "Quẻ May Mắn 20/10",
      description: "Dì chọn thử một hộp quà nhé:",
      boxes: [
        { id: 1, giftName: "Nhiều Sức Khỏe & Trẻ Mãi 🌺", note: "Dì lúc nào cũng tràn đầy năng lượng!" },
        { id: 2, giftName: "Buổi trà chiều trò chuyện cùng mẹ con ☕", note: "Lại cùng nhau ôn lại kỷ niệm xưa ạ" },
        { id: 3, giftName: "Vạn sự như ý & Niềm vui ngập tràn 🎁", note: "Mọi điều tốt đẹp nhất đến với Dì!" },
      ],
    },
    letter: {
      title: "Gửi Dì Khoa Kính Yêu",
      images: ["/images/di_khoa_letter.jpg"],
      body: [
        "Dì Khoa kính yêu,",
        "Cảm ơn Dì vì những bài học hay thời cấp 2 và tình cảm ấm áp Dì luôn dành cho con cũng như gia đình con.",
        "Chúc Dì một ngày 20/10 thật nhiều niềm vui, luôn rạng rỡ và hạnh phúc bên gia đình!",
      ],
      closing: "Học trò & Cháu ngoan của Dì ❤️",
    },
  },

  // === 5. CÁC CHỊ ===
  sisters: {
    intro: {
      greeting: "Em chào Chị yêu! ✨",
      question: "20/10 rạng rỡ dành riêng cho người chị siêu tuyệt vời và tâm lý!",
      passcodeHint: "Bấm vào nhận quà 20/10 từ em nè Chị ơi!",
      correctAnswer: "Chị yêu",
    },
    story: {
      title: "Góc Chị Em Thân Thiết",
      messages: [
        "Cảm ơn Chị vì đã luôn lắng nghe, quan tâm và cho em những lời khuyên cực kỳ tâm lý.",
        "Có một người chị vừa xinh đẹp vừa chu đáo đúng là điều may mắn của em.",
        "Chúc Chị ngày 20/10 thật nhiều niềm vui, công việc thăng tiến rực rỡ và luôn tràn ngập năng lượng tích cực!",
      ],
    },
    game: {
      title: "Hộp Quà Cho Chị Yêu",
      description: "Chị chọn 1 trong 3 hộp quà xinh xắn này nhé:",
      boxes: [
        { id: 1, giftName: "Ly Trà Sữa Full Topping Size L 🧋", note: "Hôm nay em bao liền!" },
        { id: 2, giftName: "Thẻ Mua Sắm Bất Tận 🛍️", note: "Sắm sửa xinh đẹp xuống phố thôi Chị" },
        { id: 3, giftName: "Lời chúc Sớm thành Phú Bà 💖", note: "Tiền vào như nước, bớt cọc cạch nhé!" },
      ],
    },
    letter: {
      title: "Gửi Chị Thân Yêu",
      images: ["/images/relatives_letter.jpg"],
      body: [
        "Chị yêu,",
        "Chúc Chị 20/10 thật rực rỡ, luôn tươi trẻ, tự tin và đạt được mọi mục tiêu Chị ấp ủ.",
      ],
      closing: "Em của Chị ❤️",
    },
  },

  // === 6. CÁC BÁ / CÁC DÌ KHÁC ===
  other_relatives: {
    intro: {
      greeting: "Cháu/Con chào Bá ạ! 🌾",
      question: "Hôm nay 20/10, cháu/con có tấm thiệp nhỏ gửi tặng người thân yêu trong gia đình!",
      passcodeHint: "Bấm vào đây để mở lời chúc ấm áp nhé!",
      correctAnswer: "Chúc mừng 20/10",
    },
    story: {
      title: "Tình Thân Gia Đình",
      messages: [
        "Gửi Bá - những người phụ nữ luôn yêu thương và chu đáo với con cháu.",
        "Cảm ơn Bá đã luôn dành tình cảm ấm áp và sự động viên cho cháu/con trong mỗi dịp gia đình sum họp.",
        "Nhờ có sự quan tâm của Bá mà gia đình mình luôn ấm áp và ngập tràn tiếng cười.",
        "Nhân ngày Phụ nữ Việt Nam, cháu/con kính chúc Bá dồi dào sức khỏe, an nhiên và luôn tươi trẻ!",
      ],
    },
    game: {
      title: "Quẻ Mắn May Mắn",
      description: "Bá chọn 1 chiếc hộp may mắn nhé:",
      boxes: [
        { id: 1, giftName: "Sức Khỏe Dồi Dào & Bình An 🌿", note: "Sống vui sống khỏe cùng con cháu!" },
        { id: 2, giftName: "Nhan Sắc Trẻ Mãi Không Già 🌺", note: "Ngày càng tươi trẻ rạng rỡ ạ!" },
        { id: 3, giftName: "Gia Đình Hòa Thuận & Vạn Sự Như Ý 🎁", note: "Con cháu ngoan ngoãn, tiền tài hanh thông!" },
      ],
    },
    letter: {
      title: "Lời Chúc Ấm Áp",
      images: ["/images/relatives_letter.jpg"],
      body: [
        "Kính gửi Bá,",
        "Nhân ngày 20/10, cháu/con chúc Bá luôn tràn ngập niềm vui, sức khỏe dẻo dai và mãi là chỗ dựa tinh thần ấm áp cho cả gia đình.",
      ],
      closing: "Cháu/Con ngoan của gia đình ❤️",
    },
  },

  // === 7. NGƯỜI YÊU ===
  lover: {
    intro: {
      greeting: "Em bé của anh ơi! 🥰",
      question: "Kéo thanh đo độ đáng yêu của em hôm nay xem được bao nhiêu % nào?",
      passcodeHint: "Mật mã là: 100% đáng yêu!",
      correctAnswer: "100%",
    },
    story: {
      title: "Kỷ Niệm Của Chúng Mình",
      messages: [
        "Cảm ơn em đã đến và làm cho thế giới của anh trở nên rực rỡ hơn.",
        "Những lần cùng đi ăn, những buổi chiều lượn phố...",
        "Tất cả đều là những mảnh ghép hạnh phúc nhất của anh.",
        "20/10 này, anh chỉ muốn chúc em luôn cười tươi và hạnh phúc bên anh!",
      ],
    },
    game: {
      title: "Thử Thách Nhận Quà",
      description: "Chọn 1 món quà em thích nhất hôm nay nè:",
      boxes: [
        { id: 1, giftName: "1 Ly Trà Sữa Full Topping 🧋", note: "Order liền tay ngay lập tức!" },
        { id: 2, giftName: "1 Buổi Hẹn Hò Bất Ngờ Tối Nay 🌹", note: "Lên đồ xinh đẹp chờ anh qua đón" },
        { id: 3, giftName: "1 Món Quà Bí Mật Đang Chờ Em 🎁", note: "Đã chuẩn bị xong xuôi chờ em mở" },
      ],
    },
    letter: {
      title: "Gửi Công Chúa Của Anh",
      body: [
        "Em yêu,",
        "Chúc em 20/10 luôn xinh đẹp, rực rỡ và luôn cảm thấy hạnh phúc khi ở bên anh. Anh sẽ luôn ở đây để yêu thương và nâng niu em.",
      ],
      closing: "Yêu em rất nhiều ❤️",
    },
  },

 // === 8. BẠN THÂN (DÙNG tu_1.jpg CHO LÁ THƯ CUỐI) ===
  friend: {
    intro: {
      greeting: "Alo ê bạn hiền! 🎉",
      question: "Ai là người xinh đẹp / đẹp trai nhất hôm nay?",
      passcodeHint: "Bấm vào để nhận quà từ tớ!",
      correctAnswer: "Mày chứ ai",
    },
    story: {
      title: "Góc Dành Cho Cạ Cứng",
      messages: [
        "Chúc mừng 20/10 người bạn luôn sát cánh cùng tớ trong mọi cuộc vui!",
        "Tuy thỉnh thoảng hay troll nhau nhưng nhận xét khách quan là mày rất tuyệt.",
        "Chúc mày ngày càng xinh đẹp, sớm giàu có và bớt cọc lại nhé!",
      ],
    },
    game: {
      title: "Mở Quà Bất Ngờ 🎁",
      description: "Chọn chiếc hộp may mắn dành riêng cho bạn nhé:",
      boxes: [
        { 
          id: 1, 
          label: "Cho Tú ✨", // 👈 Nhãn hiển thị trên hộp 1
          giftName: "Món Quà Đặc Biệt Cho Tú ✨", 
          note: "Một chầu đi ăn/uống phủ phê + quà tặng riêng dành cho Tú nè!",
          images: ["/images/tu_1.jpg", "/images/tu_2.jpg"]
        },
        { 
          id: 2, 
          label: "Thẻ Ting Ting 💳", // 👈 Nhãn hiển thị trên hộp 2
          giftName: "Thẻ Bố Trí 'Ting Ting' 💳", 
          note: "Gửi STK đây bắn tiền lì xì 20/10 luôn cho nóng!" 
        },
        { 
          id: 3, 
          label: "Cho Tuệ 💖", // 👈 Nhãn hiển thị trên hộp 3
          giftName: "Món Quà Bất Ngờ Cho Tuệ 💖", 
          note: "Chúc Tuệ 20/10 luôn rạng rỡ, xinh đẹp và mọi điều như ý nhé!",
          images: ["/images/tue_1.jpg"]
        },
      ],
    },
    letter: {
      title: "Bức Thư Cạ Cứng",
      images: ["/images/tu_1.jpg"], // 👈 Đã đổi sang dùng tu_1.jpg
      body: [
        "Gửi bạn tớ,",
        "Chúc 20/10 vui vẻ, ngày càng rạng rỡ và tiền vào như nước để còn bao tớ đi ăn nhé!",
      ],
      closing: "Đồng chí bạn thân ✨",
    },
  },
};