
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/movie_title' do
  movie = params["title"]
  result = HTTParty.get("http://omdbapi.com/?t=#{movie}&apikey=2f6435d9")
  @title = result.parsed_response["Title"]
  @year = result.parsed_response["Year"]
  @poster = result["Poster"]
  @genre = result.parsed_response["Genre"]
  @cast = result.parsed_response["Actors"]
  @plot = result.parsed_response["Plot"]
  erb :movie


end
