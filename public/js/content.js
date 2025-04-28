console.log("content script loaded successfully!")

const firstYearContent = {
  aids: [
    { 
      title: "Basic Civil Engineering", 
      links: ["", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Computer engineering", 
      links: ["/notes/Firstyear/bce/unit1.pdf", "/notes/Firstyear/bce/unit2.pdf", "/notes/Firstyear/bce/unit3.pdf", "/notes/Firstyear/bce/unit4.pdf", "/notes/Firstyear/bce/unit5.pdf"] 
    }, 
    { 
      title: "Mathematics I", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Mathematics 2", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Chemistry", 
      links: ["/notes/Firstyear/chemistry/unit1.pdf", "/notes/Firstyear/chemistry/unit2.pdf", "/notes/Firstyear/chemistry/unit3.pdf", "/notes/Firstyear/chemistry/unit4.pdf", "/notes/Firstyear/chemistry/unit5.pdf"] 
    },
    { 
      title: "Engineering Physics", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Electrical And Electronics Engineering", 
      links: ["/notes/Firstyear/Beee/unit1.pdf", "/notes/Firstyear/Beee/unit2.pdf", "/notes/Firstyear/Beee/unit3.pdf", "/notes/Firstyear/Beee/unit4.pdf", "/notes/Firstyear/Beee/unit5.pdf"] 
    },
    { 
      title: "English For Communication", 
      links: ["/notes/Firstyear/engishforcomm/unit1.pdf", "/notes/Firstyear/engishforcomm/unit1.pdf", "/notes/Firstyear/engishforcomm/unit1.pdf", "/notes/Firstyear/engishforcomm/unit1.pdf", "/notes/Firstyear/engishforcomm/unit1.pdf"] 
    },
    { 
      title: "LLS", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }
  ],

  aiml: [
    { 
      title: "Basic Civil Engineersing", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Computer engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }, 
    { 
      title: "Mathematics I", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Mathematics 2", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Chemistry", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Physics", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "BEEE", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "English For Communication", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "LLS", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }
  ],

  cse : [
    { 
      title: "Basic Civil Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Computer engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }, 
    { 
      title: "Mathematics I", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Mathematics 2", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Chemistry", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Physics", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "BEEE", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "English For Communication", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "LLS", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }
  ],

  iot : [
    { 
      title: "Basic Civil Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Computer engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }, 
    { 
      title: "Mathematics I", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Mathematics 2", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Chemistry", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Physics", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "BEEE", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "English For Communication", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "LLS", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }
  ],
  it : [
    { 
      title: "Basic civil Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Computer engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }, 
    { 
      title: "Mathematics I", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Mathematics 2", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Chemistry", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Physics", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "BEEE", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "English For Communication", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "LLS", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }
  ],
  cs : [
    { 
      title: "Basic Civil Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Computer engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }, 
    { 
      title: "Mathematics I", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Mathematics 2", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Chemistry", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Physics", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "BEEE", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "English For Communication", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "LLS", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }
  ],
  me : [
    { 
      title: "Basic Civil Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Computer engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }, 
    { 
      title: "Mathematics I", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Mathematics 2", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Chemistry", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Physics", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "BEEE", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "English For Communication", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "LLS", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }
  ],
  ce : [
    { 
      title: "Basic Civil Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Mechanical Engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Basic Computer engineering", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }, 
    { 
      title: "Mathematics I", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Mathematics 2", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Chemistry", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "Engineering Physics", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "BEEE", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "English For Communication", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    },
    { 
      title: "LLS", 
      links: ["link1", "link2", "link3", "link4", "link5"] 
    }
  ]
};
 const secondYearContent = {
    aids: [
      { 
        title: "Data Structures", 
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
        links: ["/notes/Aids/Second Year/M3/n1_compressed.pdf", "/notes/Aids/Second Year/M3/n2_compressed.pdf", "link3", "link4", "link5"] 
      },
      { 
        title: "Database Management Systems", 
        links: ["link1", "link2", "link3", "link4", "link5"] 
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
  