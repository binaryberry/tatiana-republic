require 'sinatra'
require 'sinatra/partial'

class TatianaRepublic < Sinatra::Application

    set :public_folder, File.join(File.dirname(__FILE__), '..', 'public') 
    
    get '/' do
        erb :index
    end

end