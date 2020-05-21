async function fetchPost(url, option={})
{
      const response = await fetch(url, {
          method:'POST',
          headers: JSON.stringify(option.header),
          body: JSON.stringify(option.body)
      });

      return response;
}
