function Send(){

    var sQuestion = txtMsg.value;
    var data = {
          model: "text-davinci-003",
          prompt: sQuestion,
          max_tokens: 2048,
          temperature: 0
    }  
    $.ajax({
      type: "POST",
      url: 'https://api.openai.com/v1/completions',
      headers:{
          "Accept" : "application/json",
          "Content-Type": "application/json", 
          "Authorization": "Bearer " +  OPENAI_API_KEY },
      data: JSON.stringify(data),
  
    }).done(function(response) {
  
          var sanswer = response.choices[0].text
          txtOut.value = sanswer
  
    }).fail(function(error) {
      alert("!/js/user.js에서 에러발생: " + error.statusText);
      console.log(error)
    });
  }
