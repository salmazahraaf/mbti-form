// QUESTIONS

const questions = [
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Spontan, Fleksibel, tidak diikat waktu",
      "answer1Total": "1",
      "answer2": "Terencana dan memiliki deadline jelas",
      "answer2Total": "1",
      id:"1"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Lebih memilih berkomunikasi dengan menulis",
      "answer1Total": "1",
      "answer2": "Lebih memilih berkomunikasi dengan bicara",
      "answer2Total": "1",
      id:"2"
    },
    {
      "question":
        "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Tidak menyukai hal-hal yang bersifat mendadak dan di luar perencanaan",
      "answer1Total": "5",
      "answer2": "Perubahan mendadak tidak jadi masalah",
      "answer2Total": "10",
      id:"3"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Obyektif",
      "answer1Total": "1",
      "answer2": "Subyektif",
      "answer2Total": "1",
      id:"4"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Menemukan dan mengembangkan ide dengan mendiskusikannya",
      "answer1Total": "1",
      "answer2": "Menemukan dan mengembangkan ide dengan merenungkan",
      "answer2Total": "1",
      id:"5"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Bergerak dari gambaran umum baru ke detail",
      "answer1Total": "1",
      "answer2": "Bergerak dari detail ke gambaran umum sebagai kesimpulan akhir",
      "answer2Total": "1",
      id:"6"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Berorientasi pada dunia eksternal (kegiatan, orang)",
      "answer1Total": "1",
      "answer2": "Berorientasi pada dunia internal (memori, pemikiran, ide)",
      "answer2Total": "1",
      id:"7"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Berbicara mengenai masalah yang dihadapi hari ini dan langkah-langkah praktis mengatasinya",
      "answer1Total": "1",
      "answer2": "Berbicara mengenai visi masa depan dan konsep-konsep mengenai visi tersebut",
      "answer2Total": "1",
      id:"8"
    },
    {
      "question":
        "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Diyakinkan dengan penjelasan yang menyentuh perasaan",
      "answer1Total": "1",
      "answer2": "Diyakinkan dengan penjelasan yang masuk akal",
      "answer2Total": "1",
      id:"9"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Fokus pada sedikit hobi namun mendalam",
      "answer1Total": "1",
      "answer2": "Fokus pada banyak hobi secara luas dan umum",
      "answer2Total": "1",
      id:"10"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Tertutup dan mandiri",
      "answer1Total": "1",
      "answer2": "Sosial dan ekspresif",
      "answer2Total": "1",
      id:"11"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Aturan, jadwal dan target sangat mengikat dan membebani",
      "answer1Total": "1",
      "answer2": "Aturan, jadwal dan target akan sangat membantu dan memperjelas tindakan",
      "answer2Total": "1",
      id:"12"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Menggunakan pengalaman sebagai pedoman",
      "answer1Total": "1",
      "answer2": "Menggunakan imajinasi dan perenungan sebagai pedoman",
      "answer2Total": "1",
      id:"13"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Berorientasi tugas dan job description",
      "answer1Total": "1",
      "answer2": "Berorientasi pada manusia dan hubungan",
      "answer2Total": "1",
      id:"14"
    },
    {
      "question":
        "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Pertemuan dengan orang lain dan aktivitas sosial melelahkan",
      "answer1Total": "1",
      "answer2": "Bertemu orang dan aktivitas sosial membuat bersemangat",
      "answer2Total": "1",
      id:"15"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "SOP sangat membantu",
      "answer1Total": "1",
      "answer2": "SOP sangat membosankan",
      "answer2Total": "1",
      id:"16"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Mengambil keputusan berdasar logika dan aturan main",
      "answer1Total": "1",
      "answer2": "Mengambil keputusan berdasar perasaan pribadi dan kondisi orang lain",
      "answer2Total": "1",
      id:"17"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Bebas dan dinamis",
      "answer1Total": "1",
      "answer2": "Prosedural dan tradisional",
      "answer2Total": "1",
      id:"18"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Berorientasi pada hasil",
      "answer1Total": "1",
      "answer2": "Berorientasi pada proses",
      "answer2Total": "1",
      id:"19"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Beraktifitas sendirian di rumah menyenangkan",
      "answer1Total": "1",
      "answer2": "Beraktifitas sendirian di rumah membosankan",
      "answer2Total": "1",
      id:"20"
    },
    {
      "question":
        "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Membiarkan orang lain bertindak bebas asalkan tujuan tercapai",
      "answer1Total": "1",
      "answer2": "Mengatur orang lain dengan tata tertib agar tujuan tercapai",
      "answer2Total": "1",
      id:"21"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Memilih ide inspiratif lebih penting daripada fakta",
      "answer1Total": "1",
      "answer2": "Memilih fakta lebih penting daripada ide inspiratif",
      "answer2Total": "1",
      id:"22"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Mengemukakan tujuan dan sasaran lebih dahulu",
      "answer1Total": "1",
      "answer2": "Mengemukakan kesepakatan terlebih dahulu",
      "answer2Total": "1",
      id:"23"
    },
    {
      "question": "PILIHLAH PENYATAAN PALING MENDEKATI DENGAN GAMBARAN DIRI SAUDARA",
      "answer1": "Fokus pada target dan mengabaikan hal-hal baru",
      "answer1Total": "1",
      "answer2": "Memperhatikan hal-hal baru dan siap menyesuaikan diri serta mengubah target",
      "answer2Total": "1",
      id:"24"
    }
  ]
  
  
  let currentQuestion = 0;
  let score = [];
  let score_2 = [];
  let mbti_res = [];
  let selectedAnswersData = [];
  let score_i = [];
  const totalQuestions =questions.length;
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  
  //Function to generate question 
  function generateQuestions (index) {
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      //Populate html elements 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total-1', `${option1Total}`);
      option2.setAttribute('data-total-2', `${option2Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
  }
  
  function eqq(a,b,c,d,e,f,g) {
    z = (a + b + c + d + e + f + g) / 15
    return z ;             
  }
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Isi dulu dong bos');
          return;
      }
      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total-1'));
      const answerScore_2 = Number(selectedOption.nextElementSibling.getAttribute('data-total-2'));
  
      ////Add the answer score to the score array
      score.push(answerScore);
      score_2.push(answerScore_2);

      const core_i = eqq(score[1],score_2[4],score_2[6],score[9],score[10],score[14],score[19]) 
      const core_e = eqq(score_2[1],score[4],score[6],score_2[9],score_2[10],score_2[14],score_2[19]) 
      const core_s = eqq(score_2[5],score[7],score[12],score[15],score_2[17],score_2[21],score_2[22]) 
      const core_n = eqq(score[5],score_2[7],score_2[12],score_2[15],score[17],score[21],score_2[22])
      //const core_t = eqq(score[1],score_2[4],score_2[6],score[9],score[10],score[14],score[19])
      //const core_f = eqq(score[1],score_2[4],score_2[6],score[9],score[10],score[14],score[19])
      //const core_j = eqq(score[1],score_2[4],score_2[6],score[9],score[10],score[14],score[19])
      //const core_p = eqq(score[1],score_2[4],score_2[6],score[9],score[10],score[14],score[19]) 
  
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }

      //if(core_i>core_e){mbti_res.push('I')}
      //else {mbti_res.push('E')}

      //if(core_s>core_n){mbti_res.push('S')}
      //else {mbti_res.push('N')}

      //If the quiz is finished then we hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML = 
        `<h1 class="final-score">bentar ya masih gatau pake if di js gimana ${mbti_res}</h1>
           <div class="summary">
              <h1>Hasil</h1>
              <p>Dimensi:</p>
              <p>Introvert (I) ${Math.round(core_i * 100)}% -- ${Math.round(core_e * 100)}% (E) Ekstrovert </p>
              <p>Sensing (S) ${Math.round(core_s * 100)}% -- ${Math.round(core_n * 100)}% (N) Intuition </p>
          </div>
          <button class="restart">Restart Quiz</button>
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      //remove last array value;
      score.pop();
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Fuction to reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      score = [];
      //Reload quiz to the start
      location.reload();
      }
  
  }
  
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',restartQuiz);