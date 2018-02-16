
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/search' do
  movie = params["title"]
  result = HTTParty.get("http://omdbapi.com/?s=#{movie}&apikey=2f6435d9")
  @list = result.parsed_response

  erb :results
end

get '/movie' do
  movie = params[:id]
  result = HTTParty.get("http://omdbapi.com/?i=#{movie}&apikey=2f6435d9")
  @title = result["Title"]
  @year = result.parsed_response["Year"]
  @poster = result["Poster"]
  @genre = result.parsed_response["Genre"]
  @cast = result.parsed_response["Actors"]
  @plot = result.parsed_response["Plot"]

  erb :movie
end

# res['Search'].length
# res['Search'].first['Year']
