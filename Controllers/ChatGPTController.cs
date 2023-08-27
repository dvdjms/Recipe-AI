using Microsoft.AspNetCore.Mvc;
using OpenAI_API.Completions;
using OpenAI_API;

namespace ChatGPT.Controllers

{
      [ApiController]
      [Route("api/[controller]")]
      // [Route("api/chatgpt")]

      public class ChatGPTController : ControllerBase
      {     
            [HttpPost]
            public async Task<IActionResult> GetAIBasedResult([FromBody] RecipeRevel.ChatGPTRequestDTO requestDTO)
            {
                  if (!ModelState.IsValid)
                  {
                        return BadRequest(ModelState);
                  }

                  IConfiguration configuration = new ConfigurationBuilder()
                        .AddJsonFile("config.json")
                        .Build();
                  string APIKey = configuration["API_KEY"] ?? string.Empty;
            
                  // string answer = string.Empty;

                  var openai = new OpenAIAPI(APIKey);
                  CompletionRequest completion = new()
                  {
                        Prompt = requestDTO.SearchText,
                        Model = OpenAI_API.Models.Model.DavinciText,
                        MaxTokens = 1000,
                  };

                  var result = await openai.Completions.CreateCompletionAsync(completion);
                  // foreach (var item in result.Completions)
                  // {
                  //       answer += item.Text;
                  // }
                  string answer = string.Join("", result.Completions.Select(item => item.Text));

                  var responseObject = new
                  {
                        Answer = answer
                  };
                  Console.WriteLine(responseObject.Answer);
                  return Ok(responseObject);
            }
      }
}