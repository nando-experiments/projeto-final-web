# encoding: UTF-8
require "rubygems"
require "tmpdir"

GITHUB_REPONAME = "nandomoreirame/projeto-final-web"

task default: %w[publish]

desc "Publish to gh-pages"
task :publish do
  Dir.mktmpdir do |tmp|
    cp_r "agencia-fercom/dist/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp

    system "git init"

    # system "git remote add origin https://github.com/#{GITHUB_REPONAME}.git"
    system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
    system "git checkout --orphan gh-pages"
    system "git add -A ."
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git push origin gh-pages --force"

    Dir.chdir pwd
  end
end
