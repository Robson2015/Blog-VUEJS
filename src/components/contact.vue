<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="'/'">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
      </ol>
    </nav>
    <h1 class="titlePage">Nous-contactez </h1>
    <div class="row">
      <div class="col-sm-6">
        <ul>
          <li>Email: {{email}}</li>
          <li>Website: {{web}}</li>
          <li>teletohne:
            <ul>
              <li> {{tel1}}</li>
              <li> {{tel2}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-sm-6">
        <form class="form-horizontal" method="POST" action="ror@esokia-webagency.com">
          <fieldset>

            <!-- Form Name -->
            <legend class="d-none">Envoyer votre message</legend>

            <!-- Text input-->
            <div class="form-group row">
              <label class="col-md-4 control-label" for="nom">Nom</label>
              <div class="col-md-8">
              <input id="nom" name="nom" type="text" placeholder="nom" class="form-control input-md" required="" v-model="form.userName">
              </div>
            </div>

           <!-- Text input-->
            <div class="form-group row">
              <label class="col-md-4 control-label" for="prenom">Prénoms</label>
              <div class="col-md-8">
              <input id="prenom" name="prenom" type="text" placeholder="prénoms" class="form-control input-md" required="" v-model="form.firstName">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group row">
              <label class="col-md-4 control-label" for="adresse">Adresse</label>
              <div class="col-md-8">
              <input id="adresse" name="adresse" type="text" placeholder="Adresse" class="form-control input-md" required="" v-model="form.adresse">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group row">
              <label class="col-md-4 control-label" for="telephone">Tel</label>
              <div class="col-md-8">
              <input id="telephone" name="telephone" type="text" placeholder="000 00 000 00" class="form-control input-md" required="" v-model="form.tel">
              </div>
            </div>

            <!-- Textarea -->
            <div class="form-group row">
              <label class="col-md-4 control-label" for="message">Message</label>
              <div class="col-md-8">
                <textarea class="form-control" id="message" name="message" v-model="form.message">Message</textarea>
              </div>
            </div>

            <!-- Button -->
            <div class="form-group row">
              <label class="col-md-4 control-label" for="singlebutton"></label>
              <div class="col-md-8">
                <!--<button id="singlebutton" name="singlebutton" class="btn btn-primary">Valider</button>-->
                <input class="button is-primary margin-bottom" type="submit" @click.prevent="Submit" />
              </div>
            </div>

          </fieldset>
        </form>

          <transition name="fade" mode="out-in">
            <article class="message is-primary" v-show="showSubmitFeedback">
              <div class="message-body">
                Message envoyer !
              </div>
            </article>
          </transition>
    </div>
      <pre><code>{{form}}</code></pre>
  </div>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title:'contact',
      email: 'ror@esokia.com',
      web: 'www.roresokia.com',
      tel1:'033 33 333 33 ',
      tel2:'033 33 333 33 ',
       form: {
        userName: '',
        firstName: '',
        adresse: '',
        tel: '',
        message: '',
      },
      showSubmitFeedback: false
    }
  },
  methods: {
    fakeSubmit(){
      this.showSubmitFeedback = true;
      setTimeout(() => {
        this.showSubmitFeedback = false;
      }, 3000);
    }
  }
}
</script>
