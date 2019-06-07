require 'sinatra'
require 'sinatra/reloader'

set :port, 3001
before do
  headers 'Access-Control-Allow-Origin' => '*'
  headers 'Access-Control-Allow-Headers' => 'Origin, X-Requested-With, Content-Type, Accept'
end

get '/' do
  content_type :json
  data = { message: "ガバWebDevへようこそ" }
  data.to_json
end

get '/test1' do
  content_type :json
  data = { message: "これはサーバーから送られたデータですよ" }
  data.to_json
end

get '/test2' do
  content_type :json
  data = { items: [
    { message: 'ひとつめのアイテム' },
    { message: 'ふたつめのアイテム' },
    { message: 'みっつめのアイテム' },
  ]}
  data.to_json
end