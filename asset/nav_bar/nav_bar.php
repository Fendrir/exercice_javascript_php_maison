<nav class="navbar navbar-inverse bg-faded">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand">Mon super site</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="?p=home">Home</a></li>

    </ul>

                <!-- partie recherche avec le menu déroulant -->

    <ul class="nav navbar-nav navbar-right">
      
    <form class="navbar-form form-inline" method="GET" action="?p=home">

                    <!-- Bouton de recherche -->
    
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search" name="search">
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
    </ul>

  </div>
</nav>