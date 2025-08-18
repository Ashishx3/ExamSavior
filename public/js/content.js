console.log("content script loaded successfully!")

const firstYearContent = {  
  aids: [
    { 
      title: "Basic Civil Engineering", 
      links: [
        { view: "https://drive.google.com/file/d/1lZQ-Ka5dm_YHxoYGCAADYoR9-jhCIOb2/view?usp=sharing", download: "https://drive.google.com/file/d/1lZQ-Ka5dm_YHxoYGCAADYoR9-jhCIOb2/view?usp=sharing" },
        { view: "https://drive.google.com/file/d/1A5WNyaSkoTcs_0buZItAnzL-9GBYwvCG/view?usp=sharing", download: "https://drive.google.com/file/d/1A5WNyaSkoTcs_0buZItAnzL-9GBYwvCG/view?usp=sharing" },
        { view: "https://drive.google.com/file/d/1STPSVnciy08zgqhj3zK81D4gHqki-6bU/view?usp=sharing", download: "https://drive.google.com/file/d/1STPSVnciy08zgqhj3zK81D4gHqki-6bU/view?usp=sharing" },
        { view: "https://drive.google.com/file/d/1OWukztfWWUpt9s3tbYFifAp_AuR-zgEu/view?usp=sharing", download: "https://drive.google.com/file/d/1OWukztfWWUpt9s3tbYFifAp_AuR-zgEu/view?usp=sharing" },
        { view: "https://drive.google.com/file/d/1Hz_RSFOEgy7uAg_bB9zRpdxJOeZeohSk/view?usp=sharing", download: "https://drive.google.com/file/d/1Hz_RSFOEgy7uAg_bB9zRpdxJOeZeohSk/view?usp=sharing" }
      ]
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: [
        { view: "https://linkvertise.com/bme1", download: "/notes/bme/unit1.pdf" },
        { view: "https://linkvertise.com/bme2", download: "/notes/bme/unit2.pdf" },
        { view: "https://linkvertise.com/bme3", download: "/notes/bme/unit3.pdf" },
        { view: "https://linkvertise.com/bme4", download: "/notes/bme/unit4.pdf" },
        { view: "https://linkvertise.com/bme5", download: "/notes/bme/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Computer Engineering", 
      links: [
        { view: "https://linkvertise.com/bce1", download: "https://drive.google.com/file/d/1lZQ-Ka5dm_YHxoYGCAADYoR9-jhCIOb2/view?usp=drive_link" },
        { view: "https://linkvertise.com/bce2", download: "/notes/Firstyear/bce/unit2.pdf" },
        { view: "https://linkvertise.com/bce3", download: "/notes/Firstyear/bce/unit3.pdf" },
        { view: "https://linkvertise.com/bce4", download: "/notes/Firstyear/bce/unit4.pdf" },
        { view: "https://linkvertise.com/bce5", download: "/notes/Firstyear/bce/unit5.pdf" }
      ]
    }, 
    { 
      title: "Mathematics I", 
      links: [
        { view: "https://linkvertise.com/m1u1", download: "/notes/math1/unit1.pdf" },
        { view: "https://linkvertise.com/m1u2", download: "/notes/math1/unit2.pdf" },
        { view: "https://linkvertise.com/m1u3", download: "/notes/math1/unit3.pdf" },
        { view: "https://linkvertise.com/m1u4", download: "/notes/math1/unit4.pdf" },
        { view: "https://linkvertise.com/m1u5", download: "/notes/math1/unit5.pdf" }
      ] 
    },
    { 
      title: "Mathematics II", 
      links: [
        { view: "https://linkvertise.com/m2u1", download: "/notes/math2/unit1.pdf" },
        { view: "https://linkvertise.com/m2u2", download: "/notes/math2/unit2.pdf" },
        { view: "https://linkvertise.com/m2u3", download: "/notes/math2/unit3.pdf" },
        { view: "https://linkvertise.com/m2u4", download: "/notes/math2/unit4.pdf" },
        { view: "https://linkvertise.com/m2u5", download: "/notes/math2/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Chemistry", 
      links: [
        { view: "https://linkvertise.com/chem1", download: "/notes/Firstyear/chemistry/unit1.pdf" },
        { view: "https://linkvertise.com/chem2", download: "/notes/Firstyear/chemistry/unit2.pdf" },
        { view: "https://linkvertise.com/chem3", download: "/notes/Firstyear/chemistry/unit3.pdf" },
        { view: "https://linkvertise.com/chem4", download: "/notes/Firstyear/chemistry/unit4.pdf" },
        { view: "https://linkvertise.com/chem5", download: "/notes/Firstyear/chemistry/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Physics", 
      links: [
        { view: "https://linkvertise.com/phy1", download: "/notes/physics/unit1.pdf" },
        { view: "https://linkvertise.com/phy2", download: "/notes/physics/unit2.pdf" },
        { view: "https://linkvertise.com/phy3", download: "/notes/physics/unit3.pdf" },
        { view: "https://linkvertise.com/phy4", download: "/notes/physics/unit4.pdf" },
        { view: "https://linkvertise.com/phy5", download: "/notes/physics/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Electrical And Electronics Engineering", 
      links: [
        { view: "https://drive.google.com/file/d/1v7i0qhrNsGoWwRjFbgeBCAfvRnt4l1WU/view?usp=sharing", download: "https://drive.google.com/file/d/1v7i0qhrNsGoWwRjFbgeBCAfvRnt4l1WU/view?usp=sharing" },
        { view: "https://drive.google.com/file/d/1ofdv6emCD_1HCHouyurgeFLTCU8K2vRl/view?usp=sharing", download: "https://drive.google.com/file/d/1ofdv6emCD_1HCHouyurgeFLTCU8K2vRl/view?usp=sharing" },
        { view: "https://drive.google.com/file/d/1l43ySMJrCdNtsETAGSPvV7LFCpWRgwew/view?usp=sharing", download: "https://drive.google.com/file/d/1l43ySMJrCdNtsETAGSPvV7LFCpWRgwew/view?usp=sharing" },
        { view: "https://drive.google.com/file/d/16lMIyscgmAKuc_wpvYnyku56EpcgqxmZ/view?usp=sharing", download: "https://drive.google.com/file/d/16lMIyscgmAKuc_wpvYnyku56EpcgqxmZ/view?usp=sharing" },
        { view: "https://drive.google.com/file/d/1iStyA0QT9y56wuMTha5BgkP7dofo27pB/view?usp=sharing", download: "https://drive.google.com/file/d/1iStyA0QT9y56wuMTha5BgkP7dofo27pB/view?usp=sharing" }
      ] 
    },
    { 
      title: "English For Communication", 
      links: [
        { view: "https://linkvertise.com/eng1", download: "/notes/Firstyear/engishforcomm/unit1.pdf" },
        { view: "https://linkvertise.com/eng2", download: "/notes/Firstyear/engishforcomm/unit2.pdf" },
        { view: "https://linkvertise.com/eng3", download: "/notes/Firstyear/engishforcomm/unit3.pdf" },
        { view: "https://linkvertise.com/eng4", download: "/notes/Firstyear/engishforcomm/unit4.pdf" },
        { view: "https://linkvertise.com/eng5", download: "/notes/Firstyear/engishforcomm/unit5.pdf" }
      ] 
    },
    { 
      title: "LLS", 
      links: [
        { view: "https://linkvertise.com/lls1", download: "/notes/lls/unit1.pdf" },
        { view: "https://linkvertise.com/lls2", download: "/notes/lls/unit2.pdf" },
        { view: "https://linkvertise.com/lls3", download: "/notes/lls/unit3.pdf" },
        { view: "https://linkvertise.com/lls4", download: "/notes/lls/unit4.pdf" },
        { view: "https://linkvertise.com/lls5", download: "/notes/lls/unit5.pdf" }
      ] 
    }
  ],
  aiml: [
    { 
      title: "Basic Civil Engineering", 
      links: [
        { view: "https://linkvertise.com/view1", download: "/notes/unit1.pdf" },
        { view: "https://linkvertise.com/view2", download: "/notes/unit2.pdf" },
        { view: "https://linkvertise.com/view3", download: "/notes/unit3.pdf" },
        { view: "https://linkvertise.com/view4", download: "/notes/unit4.pdf" },
        { view: "https://linkvertise.com/view5", download: "/notes/unit5.pdf" }
      ]
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: [
        { view: "https://linkvertise.com/bme1", download: "/notes/bme/unit1.pdf" },
        { view: "https://linkvertise.com/bme2", download: "/notes/bme/unit2.pdf" },
        { view: "https://linkvertise.com/bme3", download: "/notes/bme/unit3.pdf" },
        { view: "https://linkvertise.com/bme4", download: "/notes/bme/unit4.pdf" },
        { view: "https://linkvertise.com/bme5", download: "/notes/bme/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Computer Engineering", 
      links: [
        { view: "https://linkvertise.com/bce1", download: "/notes/Firstyear/bce/unit1.pdf" },
        { view: "https://linkvertise.com/bce2", download: "/notes/Firstyear/bce/unit2.pdf" },
        { view: "https://linkvertise.com/bce3", download: "/notes/Firstyear/bce/unit3.pdf" },
        { view: "https://linkvertise.com/bce4", download: "/notes/Firstyear/bce/unit4.pdf" },
        { view: "https://linkvertise.com/bce5", download: "/notes/Firstyear/bce/unit5.pdf" }
      ]
    }, 
    { 
      title: "Mathematics I", 
      links: [
        { view: "https://linkvertise.com/m1u1", download: "/notes/math1/unit1.pdf" },
        { view: "https://linkvertise.com/m1u2", download: "/notes/math1/unit2.pdf" },
        { view: "https://linkvertise.com/m1u3", download: "/notes/math1/unit3.pdf" },
        { view: "https://linkvertise.com/m1u4", download: "/notes/math1/unit4.pdf" },
        { view: "https://linkvertise.com/m1u5", download: "/notes/math1/unit5.pdf" }
      ] 
    },
    { 
      title: "Mathematics II", 
      links: [
        { view: "https://linkvertise.com/m2u1", download: "/notes/math2/unit1.pdf" },
        { view: "https://linkvertise.com/m2u2", download: "/notes/math2/unit2.pdf" },
        { view: "https://linkvertise.com/m2u3", download: "/notes/math2/unit3.pdf" },
        { view: "https://linkvertise.com/m2u4", download: "/notes/math2/unit4.pdf" },
        { view: "https://linkvertise.com/m2u5", download: "/notes/math2/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Chemistry", 
      links: [
        { view: "https://linkvertise.com/chem1", download: "/notes/Firstyear/chemistry/unit1.pdf" },
        { view: "https://linkvertise.com/chem2", download: "/notes/Firstyear/chemistry/unit2.pdf" },
        { view: "https://linkvertise.com/chem3", download: "/notes/Firstyear/chemistry/unit3.pdf" },
        { view: "https://linkvertise.com/chem4", download: "/notes/Firstyear/chemistry/unit4.pdf" },
        { view: "https://linkvertise.com/chem5", download: "/notes/Firstyear/chemistry/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Physics", 
      links: [
        { view: "https://linkvertise.com/phy1", download: "/notes/physics/unit1.pdf" },
        { view: "https://linkvertise.com/phy2", download: "/notes/physics/unit2.pdf" },
        { view: "https://linkvertise.com/phy3", download: "/notes/physics/unit3.pdf" },
        { view: "https://linkvertise.com/phy4", download: "/notes/physics/unit4.pdf" },
        { view: "https://linkvertise.com/phy5", download: "/notes/physics/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Electrical And Electronics Engineering", 
      links: [
        { view: "https://linkvertise.com/beee1", download: "/notes/Firstyear/Beee/unit1.pdf" },
        { view: "https://linkvertise.com/beee2", download: "/notes/Firstyear/Beee/unit2.pdf" },
        { view: "https://linkvertise.com/beee3", download: "/notes/Firstyear/Beee/unit3.pdf" },
        { view: "https://linkvertise.com/beee4", download: "/notes/Firstyear/Beee/unit4.pdf" },
        { view: "https://linkvertise.com/beee5", download: "/notes/Firstyear/Beee/unit5.pdf" }
      ] 
    },
    { 
      title: "English For Communication", 
      links: [
        { view: "https://linkvertise.com/eng1", download: "/notes/Firstyear/engishforcomm/unit1.pdf" },
        { view: "https://linkvertise.com/eng2", download: "/notes/Firstyear/engishforcomm/unit2.pdf" },
        { view: "https://linkvertise.com/eng3", download: "/notes/Firstyear/engishforcomm/unit3.pdf" },
        { view: "https://linkvertise.com/eng4", download: "/notes/Firstyear/engishforcomm/unit4.pdf" },
        { view: "https://linkvertise.com/eng5", download: "/notes/Firstyear/engishforcomm/unit5.pdf" }
      ] 
    },
    { 
      title: "LLS", 
      links: [
        { view: "https://linkvertise.com/lls1", download: "/notes/lls/unit1.pdf" },
        { view: "https://linkvertise.com/lls2", download: "/notes/lls/unit2.pdf" },
        { view: "https://linkvertise.com/lls3", download: "/notes/lls/unit3.pdf" },
        { view: "https://linkvertise.com/lls4", download: "/notes/lls/unit4.pdf" },
        { view: "https://linkvertise.com/lls5", download: "/notes/lls/unit5.pdf" }
      ] 
    }
  ],
  cse: [
    { 
      title: "Basic Civil Engineering", 
      links: [
        { view: "https://linkvertise.com/view1", download: "/notes/unit1.pdf" },
        { view: "https://linkvertise.com/view2", download: "/notes/unit2.pdf" },
        { view: "https://linkvertise.com/view3", download: "/notes/unit3.pdf" },
        { view: "https://linkvertise.com/view4", download: "/notes/unit4.pdf" },
        { view: "https://linkvertise.com/view5", download: "/notes/unit5.pdf" }
      ]
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: [
        { view: "https://linkvertise.com/bme1", download: "/notes/bme/unit1.pdf" },
        { view: "https://linkvertise.com/bme2", download: "/notes/bme/unit2.pdf" },
        { view: "https://linkvertise.com/bme3", download: "/notes/bme/unit3.pdf" },
        { view: "https://linkvertise.com/bme4", download: "/notes/bme/unit4.pdf" },
        { view: "https://linkvertise.com/bme5", download: "/notes/bme/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Computer Engineering", 
      links: [
        { view: "https://linkvertise.com/bce1", download: "/notes/Firstyear/bce/unit1.pdf" },
        { view: "https://linkvertise.com/bce2", download: "/notes/Firstyear/bce/unit2.pdf" },
        { view: "https://linkvertise.com/bce3", download: "/notes/Firstyear/bce/unit3.pdf" },
        { view: "https://linkvertise.com/bce4", download: "/notes/Firstyear/bce/unit4.pdf" },
        { view: "https://linkvertise.com/bce5", download: "/notes/Firstyear/bce/unit5.pdf" }
      ]
    }, 
    { 
      title: "Mathematics I", 
      links: [
        { view: "https://linkvertise.com/m1u1", download: "/notes/math1/unit1.pdf" },
        { view: "https://linkvertise.com/m1u2", download: "/notes/math1/unit2.pdf" },
        { view: "https://linkvertise.com/m1u3", download: "/notes/math1/unit3.pdf" },
        { view: "https://linkvertise.com/m1u4", download: "/notes/math1/unit4.pdf" },
        { view: "https://linkvertise.com/m1u5", download: "/notes/math1/unit5.pdf" }
      ] 
    },
    { 
      title: "Mathematics II", 
      links: [
        { view: "https://linkvertise.com/m2u1", download: "/notes/math2/unit1.pdf" },
        { view: "https://linkvertise.com/m2u2", download: "/notes/math2/unit2.pdf" },
        { view: "https://linkvertise.com/m2u3", download: "/notes/math2/unit3.pdf" },
        { view: "https://linkvertise.com/m2u4", download: "/notes/math2/unit4.pdf" },
        { view: "https://linkvertise.com/m2u5", download: "/notes/math2/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Chemistry", 
      links: [
        { view: "https://linkvertise.com/chem1", download: "/notes/Firstyear/chemistry/unit1.pdf" },
        { view: "https://linkvertise.com/chem2", download: "/notes/Firstyear/chemistry/unit2.pdf" },
        { view: "https://linkvertise.com/chem3", download: "/notes/Firstyear/chemistry/unit3.pdf" },
        { view: "https://linkvertise.com/chem4", download: "/notes/Firstyear/chemistry/unit4.pdf" },
        { view: "https://linkvertise.com/chem5", download: "/notes/Firstyear/chemistry/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Physics", 
      links: [
        { view: "https://linkvertise.com/phy1", download: "/notes/physics/unit1.pdf" },
        { view: "https://linkvertise.com/phy2", download: "/notes/physics/unit2.pdf" },
        { view: "https://linkvertise.com/phy3", download: "/notes/physics/unit3.pdf" },
        { view: "https://linkvertise.com/phy4", download: "/notes/physics/unit4.pdf" },
        { view: "https://linkvertise.com/phy5", download: "/notes/physics/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Electrical And Electronics Engineering", 
      links: [
        { view: "https://linkvertise.com/beee1", download: "/notes/Firstyear/Beee/unit1.pdf" },
        { view: "https://linkvertise.com/beee2", download: "/notes/Firstyear/Beee/unit2.pdf" },
        { view: "https://linkvertise.com/beee3", download: "/notes/Firstyear/Beee/unit3.pdf" },
        { view: "https://linkvertise.com/beee4", download: "/notes/Firstyear/Beee/unit4.pdf" },
        { view: "https://linkvertise.com/beee5", download: "/notes/Firstyear/Beee/unit5.pdf" }
      ] 
    },
    { 
      title: "English For Communication", 
      links: [
        { view: "https://linkvertise.com/eng1", download: "/notes/Firstyear/engishforcomm/unit1.pdf" },
        { view: "https://linkvertise.com/eng2", download: "/notes/Firstyear/engishforcomm/unit2.pdf" },
        { view: "https://linkvertise.com/eng3", download: "/notes/Firstyear/engishforcomm/unit3.pdf" },
        { view: "https://linkvertise.com/eng4", download: "/notes/Firstyear/engishforcomm/unit4.pdf" },
        { view: "https://linkvertise.com/eng5", download: "/notes/Firstyear/engishforcomm/unit5.pdf" }
      ] 
    },
    { 
      title: "LLS", 
      links: [
        { view: "https://linkvertise.com/lls1", download: "/notes/lls/unit1.pdf" },
        { view: "https://linkvertise.com/lls2", download: "/notes/lls/unit2.pdf" },
        { view: "https://linkvertise.com/lls3", download: "/notes/lls/unit3.pdf" },
        { view: "https://linkvertise.com/lls4", download: "/notes/lls/unit4.pdf" },
        { view: "https://linkvertise.com/lls5", download: "/notes/lls/unit5.pdf" }
      ] 
    }
  ],
  iot: [
    { 
      title: "Basic Civil Engineering", 
      links: [
        { view: "https://linkvertise.com/view1", download: "/notes/unit1.pdf" },
        { view: "https://linkvertise.com/view2", download: "/notes/unit2.pdf" },
        { view: "https://linkvertise.com/view3", download: "/notes/unit3.pdf" },
        { view: "https://linkvertise.com/view4", download: "/notes/unit4.pdf" },
        { view: "https://linkvertise.com/view5", download: "/notes/unit5.pdf" }
      ]
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: [
        { view: "https://linkvertise.com/bme1", download: "/notes/bme/unit1.pdf" },
        { view: "https://linkvertise.com/bme2", download: "/notes/bme/unit2.pdf" },
        { view: "https://linkvertise.com/bme3", download: "/notes/bme/unit3.pdf" },
        { view: "https://linkvertise.com/bme4", download: "/notes/bme/unit4.pdf" },
        { view: "https://linkvertise.com/bme5", download: "/notes/bme/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Computer Engineering", 
      links: [
        { view: "https://linkvertise.com/bce1", download: "/notes/Firstyear/bce/unit1.pdf" },
        { view: "https://linkvertise.com/bce2", download: "/notes/Firstyear/bce/unit2.pdf" },
        { view: "https://linkvertise.com/bce3", download: "/notes/Firstyear/bce/unit3.pdf" },
        { view: "https://linkvertise.com/bce4", download: "/notes/Firstyear/bce/unit4.pdf" },
        { view: "https://linkvertise.com/bce5", download: "/notes/Firstyear/bce/unit5.pdf" }
      ]
    }, 
    { 
      title: "Mathematics I", 
      links: [
        { view: "https://linkvertise.com/m1u1", download: "/notes/math1/unit1.pdf" },
        { view: "https://linkvertise.com/m1u2", download: "/notes/math1/unit2.pdf" },
        { view: "https://linkvertise.com/m1u3", download: "/notes/math1/unit3.pdf" },
        { view: "https://linkvertise.com/m1u4", download: "/notes/math1/unit4.pdf" },
        { view: "https://linkvertise.com/m1u5", download: "/notes/math1/unit5.pdf" }
      ] 
    },
    { 
      title: "Mathematics II", 
      links: [
        { view: "https://linkvertise.com/m2u1", download: "/notes/math2/unit1.pdf" },
        { view: "https://linkvertise.com/m2u2", download: "/notes/math2/unit2.pdf" },
        { view: "https://linkvertise.com/m2u3", download: "/notes/math2/unit3.pdf" },
        { view: "https://linkvertise.com/m2u4", download: "/notes/math2/unit4.pdf" },
        { view: "https://linkvertise.com/m2u5", download: "/notes/math2/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Chemistry", 
      links: [
        { view: "https://linkvertise.com/chem1", download: "/notes/Firstyear/chemistry/unit1.pdf" },
        { view: "https://linkvertise.com/chem2", download: "/notes/Firstyear/chemistry/unit2.pdf" },
        { view: "https://linkvertise.com/chem3", download: "/notes/Firstyear/chemistry/unit3.pdf" },
        { view: "https://linkvertise.com/chem4", download: "/notes/Firstyear/chemistry/unit4.pdf" },
        { view: "https://linkvertise.com/chem5", download: "/notes/Firstyear/chemistry/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Physics", 
      links: [
        { view: "https://linkvertise.com/phy1", download: "/notes/physics/unit1.pdf" },
        { view: "https://linkvertise.com/phy2", download: "/notes/physics/unit2.pdf" },
        { view: "https://linkvertise.com/phy3", download: "/notes/physics/unit3.pdf" },
        { view: "https://linkvertise.com/phy4", download: "/notes/physics/unit4.pdf" },
        { view: "https://linkvertise.com/phy5", download: "/notes/physics/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Electrical And Electronics Engineering", 
      links: [
        { view: "https://linkvertise.com/beee1", download: "/notes/Firstyear/Beee/unit1.pdf" },
        { view: "https://linkvertise.com/beee2", download: "/notes/Firstyear/Beee/unit2.pdf" },
        { view: "https://linkvertise.com/beee3", download: "/notes/Firstyear/Beee/unit3.pdf" },
        { view: "https://linkvertise.com/beee4", download: "/notes/Firstyear/Beee/unit4.pdf" },
        { view: "https://linkvertise.com/beee5", download: "/notes/Firstyear/Beee/unit5.pdf" }
      ] 
    },
    { 
      title: "English For Communication", 
      links: [
        { view: "https://linkvertise.com/eng1", download: "/notes/Firstyear/engishforcomm/unit1.pdf" },
        { view: "https://linkvertise.com/eng2", download: "/notes/Firstyear/engishforcomm/unit2.pdf" },
        { view: "https://linkvertise.com/eng3", download: "/notes/Firstyear/engishforcomm/unit3.pdf" },
        { view: "https://linkvertise.com/eng4", download: "/notes/Firstyear/engishforcomm/unit4.pdf" },
        { view: "https://linkvertise.com/eng5", download: "/notes/Firstyear/engishforcomm/unit5.pdf" }
      ] 
    },
    { 
      title: "LLS", 
      links: [
        { view: "https://linkvertise.com/lls1", download: "/notes/lls/unit1.pdf" },
        { view: "https://linkvertise.com/lls2", download: "/notes/lls/unit2.pdf" },
        { view: "https://linkvertise.com/lls3", download: "/notes/lls/unit3.pdf" },
        { view: "https://linkvertise.com/lls4", download: "/notes/lls/unit4.pdf" },
        { view: "https://linkvertise.com/lls5", download: "/notes/lls/unit5.pdf" }
      ] 
    }
  ],
  it: [
    { 
      title: "Basic Civil Engineering", 
      links: [
        { view: "https://linkvertise.com/view1", download: "/notes/unit1.pdf" },
        { view: "https://linkvertise.com/view2", download: "/notes/unit2.pdf" },
        { view: "https://linkvertise.com/view3", download: "/notes/unit3.pdf" },
        { view: "https://linkvertise.com/view4", download: "/notes/unit4.pdf" },
        { view: "https://linkvertise.com/view5", download: "/notes/unit5.pdf" }
      ]
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: [
        { view: "https://linkvertise.com/bme1", download: "/notes/bme/unit1.pdf" },
        { view: "https://linkvertise.com/bme2", download: "/notes/bme/unit2.pdf" },
        { view: "https://linkvertise.com/bme3", download: "/notes/bme/unit3.pdf" },
        { view: "https://linkvertise.com/bme4", download: "/notes/bme/unit4.pdf" },
        { view: "https://linkvertise.com/bme5", download: "/notes/bme/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Computer Engineering", 
      links: [
        { view: "https://linkvertise.com/bce1", download: "/notes/Firstyear/bce/unit1.pdf" },
        { view: "https://linkvertise.com/bce2", download: "/notes/Firstyear/bce/unit2.pdf" },
        { view: "https://linkvertise.com/bce3", download: "/notes/Firstyear/bce/unit3.pdf" },
        { view: "https://linkvertise.com/bce4", download: "/notes/Firstyear/bce/unit4.pdf" },
        { view: "https://linkvertise.com/bce5", download: "/notes/Firstyear/bce/unit5.pdf" }
      ]
    }, 
    { 
      title: "Mathematics I", 
      links: [
        { view: "https://linkvertise.com/m1u1", download: "/notes/math1/unit1.pdf" },
        { view: "https://linkvertise.com/m1u2", download: "/notes/math1/unit2.pdf" },
        { view: "https://linkvertise.com/m1u3", download: "/notes/math1/unit3.pdf" },
        { view: "https://linkvertise.com/m1u4", download: "/notes/math1/unit4.pdf" },
        { view: "https://linkvertise.com/m1u5", download: "/notes/math1/unit5.pdf" }
      ] 
    },
    { 
      title: "Mathematics II", 
      links: [
        { view: "https://linkvertise.com/m2u1", download: "/notes/math2/unit1.pdf" },
        { view: "https://linkvertise.com/m2u2", download: "/notes/math2/unit2.pdf" },
        { view: "https://linkvertise.com/m2u3", download: "/notes/math2/unit3.pdf" },
        { view: "https://linkvertise.com/m2u4", download: "/notes/math2/unit4.pdf" },
        { view: "https://linkvertise.com/m2u5", download: "/notes/math2/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Chemistry", 
      links: [
        { view: "https://linkvertise.com/chem1", download: "/notes/Firstyear/chemistry/unit1.pdf" },
        { view: "https://linkvertise.com/chem2", download: "/notes/Firstyear/chemistry/unit2.pdf" },
        { view: "https://linkvertise.com/chem3", download: "/notes/Firstyear/chemistry/unit3.pdf" },
        { view: "https://linkvertise.com/chem4", download: "/notes/Firstyear/chemistry/unit4.pdf" },
        { view: "https://linkvertise.com/chem5", download: "/notes/Firstyear/chemistry/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Physics", 
      links: [
        { view: "https://linkvertise.com/phy1", download: "/notes/physics/unit1.pdf" },
        { view: "https://linkvertise.com/phy2", download: "/notes/physics/unit2.pdf" },
        { view: "https://linkvertise.com/phy3", download: "/notes/physics/unit3.pdf" },
        { view: "https://linkvertise.com/phy4", download: "/notes/physics/unit4.pdf" },
        { view: "https://linkvertise.com/phy5", download: "/notes/physics/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Electrical And Electronics Engineering", 
      links: [
        { view: "https://linkvertise.com/beee1", download: "/notes/Firstyear/Beee/unit1.pdf" },
        { view: "https://linkvertise.com/beee2", download: "/notes/Firstyear/Beee/unit2.pdf" },
        { view: "https://linkvertise.com/beee3", download: "/notes/Firstyear/Beee/unit3.pdf" },
        { view: "https://linkvertise.com/beee4", download: "/notes/Firstyear/Beee/unit4.pdf" },
        { view: "https://linkvertise.com/beee5", download: "/notes/Firstyear/Beee/unit5.pdf" }
      ] 
    },
    { 
      title: "English For Communication", 
      links: [
        { view: "https://linkvertise.com/eng1", download: "/notes/Firstyear/engishforcomm/unit1.pdf" },
        { view: "https://linkvertise.com/eng2", download: "/notes/Firstyear/engishforcomm/unit2.pdf" },
        { view: "https://linkvertise.com/eng3", download: "/notes/Firstyear/engishforcomm/unit3.pdf" },
        { view: "https://linkvertise.com/eng4", download: "/notes/Firstyear/engishforcomm/unit4.pdf" },
        { view: "https://linkvertise.com/eng5", download: "/notes/Firstyear/engishforcomm/unit5.pdf" }
      ] 
    },
    { 
      title: "LLS", 
      links: [
        { view: "https://linkvertise.com/lls1", download: "/notes/lls/unit1.pdf" },
        { view: "https://linkvertise.com/lls2", download: "/notes/lls/unit2.pdf" },
        { view: "https://linkvertise.com/lls3", download: "/notes/lls/unit3.pdf" },
        { view: "https://linkvertise.com/lls4", download: "/notes/lls/unit4.pdf" },
        { view: "https://linkvertise.com/lls5", download: "/notes/lls/unit5.pdf" }
      ] 
    }
  ],
  cs: [
    { 
      title: "Basic Civil Engineering", 
      links: [
        { view: "https://linkvertise.com/view1", download: "/notes/unit1.pdf" },
        { view: "https://linkvertise.com/view2", download: "/notes/unit2.pdf" },
        { view: "https://linkvertise.com/view3", download: "/notes/unit3.pdf" },
        { view: "https://linkvertise.com/view4", download: "/notes/unit4.pdf" },
        { view: "https://linkvertise.com/view5", download: "/notes/unit5.pdf" }
      ]
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: [
        { view: "https://linkvertise.com/bme1", download: "/notes/bme/unit1.pdf" },
        { view: "https://linkvertise.com/bme2", download: "/notes/bme/unit2.pdf" },
        { view: "https://linkvertise.com/bme3", download: "/notes/bme/unit3.pdf" },
        { view: "https://linkvertise.com/bme4", download: "/notes/bme/unit4.pdf" },
        { view: "https://linkvertise.com/bme5", download: "/notes/bme/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Computer Engineering", 
      links: [
        { view: "https://linkvertise.com/bce1", download: "/notes/Firstyear/bce/unit1.pdf" },
        { view: "https://linkvertise.com/bce2", download: "/notes/Firstyear/bce/unit2.pdf" },
        { view: "https://linkvertise.com/bce3", download: "/notes/Firstyear/bce/unit3.pdf" },
        { view: "https://linkvertise.com/bce4", download: "/notes/Firstyear/bce/unit4.pdf" },
        { view: "https://linkvertise.com/bce5", download: "/notes/Firstyear/bce/unit5.pdf" }
      ]
    }, 
    { 
      title: "Mathematics I", 
      links: [
        { view: "https://linkvertise.com/m1u1", download: "/notes/math1/unit1.pdf" },
        { view: "https://linkvertise.com/m1u2", download: "/notes/math1/unit2.pdf" },
        { view: "https://linkvertise.com/m1u3", download: "/notes/math1/unit3.pdf" },
        { view: "https://linkvertise.com/m1u4", download: "/notes/math1/unit4.pdf" },
        { view: "https://linkvertise.com/m1u5", download: "/notes/math1/unit5.pdf" }
      ] 
    },
    { 
      title: "Mathematics II", 
      links: [
        { view: "https://linkvertise.com/m2u1", download: "/notes/math2/unit1.pdf" },
        { view: "https://linkvertise.com/m2u2", download: "/notes/math2/unit2.pdf" },
        { view: "https://linkvertise.com/m2u3", download: "/notes/math2/unit3.pdf" },
        { view: "https://linkvertise.com/m2u4", download: "/notes/math2/unit4.pdf" },
        { view: "https://linkvertise.com/m2u5", download: "/notes/math2/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Chemistry", 
      links: [
        { view: "https://linkvertise.com/chem1", download: "/notes/Firstyear/chemistry/unit1.pdf" },
        { view: "https://linkvertise.com/chem2", download: "/notes/Firstyear/chemistry/unit2.pdf" },
        { view: "https://linkvertise.com/chem3", download: "/notes/Firstyear/chemistry/unit3.pdf" },
        { view: "https://linkvertise.com/chem4", download: "/notes/Firstyear/chemistry/unit4.pdf" },
        { view: "https://linkvertise.com/chem5", download: "/notes/Firstyear/chemistry/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Physics", 
      links: [
        { view: "https://linkvertise.com/phy1", download: "/notes/physics/unit1.pdf" },
        { view: "https://linkvertise.com/phy2", download: "/notes/physics/unit2.pdf" },
        { view: "https://linkvertise.com/phy3", download: "/notes/physics/unit3.pdf" },
        { view: "https://linkvertise.com/phy4", download: "/notes/physics/unit4.pdf" },
        { view: "https://linkvertise.com/phy5", download: "/notes/physics/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Electrical And Electronics Engineering", 
      links: [
        { view: "https://linkvertise.com/beee1", download: "/notes/Firstyear/Beee/unit1.pdf" },
        { view: "https://linkvertise.com/beee2", download: "/notes/Firstyear/Beee/unit2.pdf" },
        { view: "https://linkvertise.com/beee3", download: "/notes/Firstyear/Beee/unit3.pdf" },
        { view: "https://linkvertise.com/beee4", download: "/notes/Firstyear/Beee/unit4.pdf" },
        { view: "https://linkvertise.com/beee5", download: "/notes/Firstyear/Beee/unit5.pdf" }
      ] 
    },
    { 
      title: "English For Communication", 
      links: [
        { view: "https://linkvertise.com/eng1", download: "/notes/Firstyear/engishforcomm/unit1.pdf" },
        { view: "https://linkvertise.com/eng2", download: "/notes/Firstyear/engishforcomm/unit2.pdf" },
        { view: "https://linkvertise.com/eng3", download: "/notes/Firstyear/engishforcomm/unit3.pdf" },
        { view: "https://linkvertise.com/eng4", download: "/notes/Firstyear/engishforcomm/unit4.pdf" },
        { view: "https://linkvertise.com/eng5", download: "/notes/Firstyear/engishforcomm/unit5.pdf" }
      ] 
    },
    { 
      title: "LLS", 
      links: [
        { view: "https://linkvertise.com/lls1", download: "/notes/lls/unit1.pdf" },
        { view: "https://linkvertise.com/lls2", download: "/notes/lls/unit2.pdf" },
        { view: "https://linkvertise.com/lls3", download: "/notes/lls/unit3.pdf" },
        { view: "https://linkvertise.com/lls4", download: "/notes/lls/unit4.pdf" },
        { view: "https://linkvertise.com/lls5", download: "/notes/lls/unit5.pdf" }
      ] 
    }
  ],
  me: [
    { 
      title: "Basic Civil Engineering", 
      links: [
        { view: "https://linkvertise.com/view1", download: "/notes/unit1.pdf" },
        { view: "https://linkvertise.com/view2", download: "/notes/unit2.pdf" },
        { view: "https://linkvertise.com/view3", download: "/notes/unit3.pdf" },
        { view: "https://linkvertise.com/view4", download: "/notes/unit4.pdf" },
        { view: "https://linkvertise.com/view5", download: "/notes/unit5.pdf" }
      ]
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: [
        { view: "https://linkvertise.com/bme1", download: "/notes/bme/unit1.pdf" },
        { view: "https://linkvertise.com/bme2", download: "/notes/bme/unit2.pdf" },
        { view: "https://linkvertise.com/bme3", download: "/notes/bme/unit3.pdf" },
        { view: "https://linkvertise.com/bme4", download: "/notes/bme/unit4.pdf" },
        { view: "https://linkvertise.com/bme5", download: "/notes/bme/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Computer Engineering", 
      links: [
        { view: "https://linkvertise.com/bce1", download: "/notes/Firstyear/bce/unit1.pdf" },
        { view: "https://linkvertise.com/bce2", download: "/notes/Firstyear/bce/unit2.pdf" },
        { view: "https://linkvertise.com/bce3", download: "/notes/Firstyear/bce/unit3.pdf" },
        { view: "https://linkvertise.com/bce4", download: "/notes/Firstyear/bce/unit4.pdf" },
        { view: "https://linkvertise.com/bce5", download: "/notes/Firstyear/bce/unit5.pdf" }
      ]
    }, 
    { 
      title: "Mathematics I", 
      links: [
        { view: "https://linkvertise.com/m1u1", download: "/notes/math1/unit1.pdf" },
        { view: "https://linkvertise.com/m1u2", download: "/notes/math1/unit2.pdf" },
        { view: "https://linkvertise.com/m1u3", download: "/notes/math1/unit3.pdf" },
        { view: "https://linkvertise.com/m1u4", download: "/notes/math1/unit4.pdf" },
        { view: "https://linkvertise.com/m1u5", download: "/notes/math1/unit5.pdf" }
      ] 
    },
    { 
      title: "Mathematics II", 
      links: [
        { view: "https://linkvertise.com/m2u1", download: "/notes/math2/unit1.pdf" },
        { view: "https://linkvertise.com/m2u2", download: "/notes/math2/unit2.pdf" },
        { view: "https://linkvertise.com/m2u3", download: "/notes/math2/unit3.pdf" },
        { view: "https://linkvertise.com/m2u4", download: "/notes/math2/unit4.pdf" },
        { view: "https://linkvertise.com/m2u5", download: "/notes/math2/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Chemistry", 
      links: [
        { view: "https://linkvertise.com/chem1", download: "/notes/Firstyear/chemistry/unit1.pdf" },
        { view: "https://linkvertise.com/chem2", download: "/notes/Firstyear/chemistry/unit2.pdf" },
        { view: "https://linkvertise.com/chem3", download: "/notes/Firstyear/chemistry/unit3.pdf" },
        { view: "https://linkvertise.com/chem4", download: "/notes/Firstyear/chemistry/unit4.pdf" },
        { view: "https://linkvertise.com/chem5", download: "/notes/Firstyear/chemistry/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Physics", 
      links: [
        { view: "https://linkvertise.com/phy1", download: "/notes/physics/unit1.pdf" },
        { view: "https://linkvertise.com/phy2", download: "/notes/physics/unit2.pdf" },
        { view: "https://linkvertise.com/phy3", download: "/notes/physics/unit3.pdf" },
        { view: "https://linkvertise.com/phy4", download: "/notes/physics/unit4.pdf" },
        { view: "https://linkvertise.com/phy5", download: "/notes/physics/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Electrical And Electronics Engineering", 
      links: [
        { view: "https://linkvertise.com/beee1", download: "/notes/Firstyear/Beee/unit1.pdf" },
        { view: "https://linkvertise.com/beee2", download: "/notes/Firstyear/Beee/unit2.pdf" },
        { view: "https://linkvertise.com/beee3", download: "/notes/Firstyear/Beee/unit3.pdf" },
        { view: "https://linkvertise.com/beee4", download: "/notes/Firstyear/Beee/unit4.pdf" },
        { view: "https://linkvertise.com/beee5", download: "/notes/Firstyear/Beee/unit5.pdf" }
      ] 
    },
    { 
      title: "English For Communication", 
      links: [
        { view: "https://linkvertise.com/eng1", download: "/notes/Firstyear/engishforcomm/unit1.pdf" },
        { view: "https://linkvertise.com/eng2", download: "/notes/Firstyear/engishforcomm/unit2.pdf" },
        { view: "https://linkvertise.com/eng3", download: "/notes/Firstyear/engishforcomm/unit3.pdf" },
        { view: "https://linkvertise.com/eng4", download: "/notes/Firstyear/engishforcomm/unit4.pdf" },
        { view: "https://linkvertise.com/eng5", download: "/notes/Firstyear/engishforcomm/unit5.pdf" }
      ] 
    },
    { 
      title: "LLS", 
      links: [
        { view: "https://linkvertise.com/lls1", download: "/notes/lls/unit1.pdf" },
        { view: "https://linkvertise.com/lls2", download: "/notes/lls/unit2.pdf" },
        { view: "https://linkvertise.com/lls3", download: "/notes/lls/unit3.pdf" },
        { view: "https://linkvertise.com/lls4", download: "/notes/lls/unit4.pdf" },
        { view: "https://linkvertise.com/lls5", download: "/notes/lls/unit5.pdf" }
      ] 
    }
  ],
  ce: [
    { 
      title: "Basic Civil Engineering", 
      links: [
        { view: "https://linkvertise.com/view1", download: "/notes/unit1.pdf" },
        { view: "https://linkvertise.com/view2", download: "/notes/unit2.pdf" },
        { view: "https://linkvertise.com/view3", download: "/notes/unit3.pdf" },
        { view: "https://linkvertise.com/view4", download: "/notes/unit4.pdf" },
        { view: "https://linkvertise.com/view5", download: "/notes/unit5.pdf" }
      ]
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: [
        { view: "https://linkvertise.com/bme1", download: "/notes/bme/unit1.pdf" },
        { view: "https://linkvertise.com/bme2", download: "/notes/bme/unit2.pdf" },
        { view: "https://linkvertise.com/bme3", download: "/notes/bme/unit3.pdf" },
        { view: "https://linkvertise.com/bme4", download: "/notes/bme/unit4.pdf" },
        { view: "https://linkvertise.com/bme5", download: "/notes/bme/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Computer Engineering", 
      links: [
        { view: "https://linkvertise.com/bce1", download: "/notes/Firstyear/bce/unit1.pdf" },
        { view: "https://linkvertise.com/bce2", download: "/notes/Firstyear/bce/unit2.pdf" },
        { view: "https://linkvertise.com/bce3", download: "/notes/Firstyear/bce/unit3.pdf" },
        { view: "https://linkvertise.com/bce4", download: "/notes/Firstyear/bce/unit4.pdf" },
        { view: "https://linkvertise.com/bce5", download: "/notes/Firstyear/bce/unit5.pdf" }
      ]
    }, 
    { 
      title: "Mathematics I", 
      links: [
        { view: "https://linkvertise.com/m1u1", download: "/notes/math1/unit1.pdf" },
        { view: "https://linkvertise.com/m1u2", download: "/notes/math1/unit2.pdf" },
        { view: "https://linkvertise.com/m1u3", download: "/notes/math1/unit3.pdf" },
        { view: "https://linkvertise.com/m1u4", download: "/notes/math1/unit4.pdf" },
        { view: "https://linkvertise.com/m1u5", download: "/notes/math1/unit5.pdf" }
      ] 
    },
    { 
      title: "Mathematics II", 
      links: [
        { view: "https://linkvertise.com/m2u1", download: "/notes/math2/unit1.pdf" },
        { view: "https://linkvertise.com/m2u2", download: "/notes/math2/unit2.pdf" },
        { view: "https://linkvertise.com/m2u3", download: "/notes/math2/unit3.pdf" },
        { view: "https://linkvertise.com/m2u4", download: "/notes/math2/unit4.pdf" },
        { view: "https://linkvertise.com/m2u5", download: "/notes/math2/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Chemistry", 
      links: [
        { view: "https://linkvertise.com/chem1", download: "/notes/Firstyear/chemistry/unit1.pdf" },
        { view: "https://linkvertise.com/chem2", download: "/notes/Firstyear/chemistry/unit2.pdf" },
        { view: "https://linkvertise.com/chem3", download: "/notes/Firstyear/chemistry/unit3.pdf" },
        { view: "https://linkvertise.com/chem4", download: "/notes/Firstyear/chemistry/unit4.pdf" },
        { view: "https://linkvertise.com/chem5", download: "/notes/Firstyear/chemistry/unit5.pdf" }
      ] 
    },
    { 
      title: "Engineering Physics", 
      links: [
        { view: "https://linkvertise.com/phy1", download: "/notes/physics/unit1.pdf" },
        { view: "https://linkvertise.com/phy2", download: "/notes/physics/unit2.pdf" },
        { view: "https://linkvertise.com/phy3", download: "/notes/physics/unit3.pdf" },
        { view: "https://linkvertise.com/phy4", download: "/notes/physics/unit4.pdf" },
        { view: "https://linkvertise.com/phy5", download: "/notes/physics/unit5.pdf" }
      ] 
    },
    { 
      title: "Basic Electrical And Electronics Engineering", 
      links: [
        { view: "https://linkvertise.com/beee1", download: "/notes/Firstyear/Beee/unit1.pdf" },
        { view: "https://linkvertise.com/beee2", download: "/notes/Firstyear/Beee/unit2.pdf" },
        { view: "https://linkvertise.com/beee3", download: "/notes/Firstyear/Beee/unit3.pdf" },
        { view: "https://linkvertise.com/beee4", download: "/notes/Firstyear/Beee/unit4.pdf" },
        { view: "https://linkvertise.com/beee5", download: "/notes/Firstyear/Beee/unit5.pdf" }
      ] 
    },
    { 
      title: "English For Communication", 
      links: [
        { view: "https://linkvertise.com/eng1", download: "/notes/Firstyear/engishforcomm/unit1.pdf" },
        { view: "https://linkvertise.com/eng2", download: "/notes/Firstyear/engishforcomm/unit2.pdf" },
        { view: "https://linkvertise.com/eng3", download: "/notes/Firstyear/engishforcomm/unit3.pdf" },
        { view: "https://linkvertise.com/eng4", download: "/notes/Firstyear/engishforcomm/unit4.pdf" },
        { view: "https://linkvertise.com/eng5", download: "/notes/Firstyear/engishforcomm/unit5.pdf" }
      ] 
    },
    { 
      title: "LLS", 
      links: [
        { view: "https://linkvertise.com/lls1", download: "/notes/lls/unit1.pdf" },
        { view: "https://linkvertise.com/lls2", download: "/notes/lls/unit2.pdf" },
        { view: "https://linkvertise.com/lls3", download: "/notes/lls/unit3.pdf" },
        { view: "https://linkvertise.com/lls4", download: "/notes/lls/unit4.pdf" },
        { view: "https://linkvertise.com/lls5", download: "/notes/lls/unit5.pdf" }
      ] 
    }
  ]
};

 const secondYearContent = {
    aids: [
      { 
        title: "Data Structuresforsecond", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Technical Communication", 
        links: ["https://www.youtube.com/", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Introduction to Probability For DS", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Artificial Intelligence", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Object Oriented Progg.", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Mathematics 3", 
        links: ["https://drive.google.com/file/d/1Kr3u7MNK2fi-56_AhAv22rKX8pepJFVy/view?usp=sharing", "https://drive.google.com/file/d/1GlihO-r51VknbacBFdmM3NjP3_sR1wNg/view?usp=sharing", "link3", "link4", "link5"] 
      },
      { 
        title: "Database Management Systems", 
        links: ["https://drive.google.com/file/d/1yPyBDtgNYRZjHnhiU-Kzcwny0SJEptGW/view?usp=sharing", "https://drive.google.com/file/d/158-W5upXA1OnBmp5HTd2KlNPbSaZTTEL/view?usp=sharing", "https://drive.google.com/file/d/17IiGzgZBtqfVfsNSVIQFv8XjmvRvcXaF/view?usp=sharing", "link4", "link5"] 
      },
      { 
        title: "Software Engineering with Agile Methodology", 
        links: ["https://drive.google.com/file/d/14EroMxM8PXIG7Gp3wj6D9-pEckITjBTY/view?usp=sharing", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Data Science", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Operating Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      }
    ],
  
    aiml: [
      { 
        title: "Data Structures", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Technical Communication", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Introduction to Probability and Statistics", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Artificial Intelligence", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "OOPS", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Discrete Strucutes", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Database Management Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Deep Learning", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Data Science", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Operating Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      }
      // Add more subjects for AIML
    ],
  cse: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  iot: [
    { title: "Subject 1asdaas", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "tatti 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  it: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  cs: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  me: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  ce: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
    // Define other branches similarly...
  };
 const thirdYearContent = {
    aids: [
      { 
        title: "Data aids Structure", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Technical Communication", 
        links: ["https://www.youtube.com/", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Introduction to Probability For DS", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Artificial Intelligence", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "OOPS", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Mathematics 3", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Database Management Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Software Engineering with Agile Methodology", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Data Science", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Operating Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      }
    ],
  
    aiml: [
      { 
        title: "Data aiml Structures", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Technical Communication", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Introduction to Probability and Statistics", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Artificial Intelligence", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "OOPS", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Discrete Strucutes", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Database Management Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Deep Learning", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Data Science", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Operating Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      }
      // Add more subjects for AIML
    ],
  cse: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  iot: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  it: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  cs: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  me: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  ce: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
    // Define other branches similarly...
  };
 const fourthYearContent = {
    aids: [
      { 
        title: "Data aids Structure", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Technical Communication", 
        links: ["https://www.youtube.com/", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Introduction to Probability For DS", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Artificial Intelligence", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "OOPS", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Mathematics 3", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Database Management Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Software Engineering with Agile Methodology", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Data Science", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Operating Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      }
    ],
  
    aiml: [
      { 
        title: "Data aiml Structures", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Technical Communication", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Introduction to Probability and Statistics", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Artificial Intelligence", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "OOPS", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Discrete Strucutes", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Database Management Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Deep Learning", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Data Science", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      },
      { 
        title: "Operating Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
      }
      // Add more subjects for AIML
    ],
  cse: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  iot: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  it: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  cs: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  me: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
  ce: [
    { title: "Subject 1", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subssdasdct 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
    { title: "Subject 2", links: ["#","#","#","#","#"] },
  ],
    // Define other branches similarly...
  };
  